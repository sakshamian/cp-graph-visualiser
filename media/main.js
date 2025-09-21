(function () {
    const vscode = acquireVsCodeApi();

    // Restore state if available
    const prevState = vscode.getState();
    if (prevState && prevState.nodes && prevState.edges && prevState.graphType) {
        document.querySelector(`input[name="graphType"][value="${prevState.graphType}"]`).checked = true;
        drawGraph(prevState.nodes, prevState.edges, prevState.graphType);
        document.getElementById("nodes").value = prevState.nodes.length;
        document.getElementById("edges").value = prevState.edges.map(e => `${e.from} ${e.to}`).join('\n');
    }

    document.getElementById("drawBtn").addEventListener("click", () => {
        const nodesCount = parseInt(document.getElementById("nodes").value.trim());
        const edgesText = document.getElementById("edges").value.trim().split("\n");
        const graphType = document.querySelector('input[name="graphType"]:checked').value;

        if (isNaN(nodesCount) || nodesCount <= 0) {
            vscode.postMessage({ type: "alert", text: "Enter valid number of nodes" });
            return;
        }

        const nodes = Array.from({ length: nodesCount }, (_, i) => ({
            id: i,
            label: i.toString()
        }));
        const edges = [];

        edgesText.forEach((line) => {
            const [a, b] = line.split(" ").map(Number);
            if (!isNaN(a) && !isNaN(b)) {
                // For directed graphs, add arrows
                if (graphType === "directed") {
                    edges.push({ from: a, to: b, arrows: "to" });
                } else {
                    edges.push({ from: a, to: b });
                }
            }
        });

        vscode.setState({ nodes, edges, graphType }); // Save state including graphType
        drawGraph(nodes, edges, graphType);
    });
})();

function drawGraph(nodes, edges, graphType) {
    const container = document.getElementById("graph");
    container.innerHTML = ""; // clear previous

    const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
    const options = {
        height: "100%",
        width: "100%",
        physics: { enabled: true },
        nodes: {
            color: {
                background: "#fff",
                border: "#fff",
                highlight: {
                    background: "#fff",
                    border: "#fff"
                }
            },
            font: {
                color: "#181818",
                size: 26,
                face: 'Helvetica, Arial, sans-serif',
                align: 'center',
                valigntop: false,
                valignmiddle: true,
                strokeWidth: 0,
                strokeColor: '#ffffff'
            },
            borderWidth: 2,
            shape: "circle",
            size: 36,
            margin: {
                left: 10
            }
        },
        edges: {
            color: {
                color: "#fff",
                highlight: "#fff",
                hover: "#fff"
            },
            width: 2,
            arrows: graphType === "directed" ? { to: { enabled: true, scaleFactor: 1 } } : undefined
        },
        interaction: {
            hover: true
        }
    };

    const network = new vis.Network(container, data, options);

    // Set pointer cursor on node hover
    network.on("hoverNode", function () {
        container.style.cursor = "pointer";
    });
    network.on("blurNode", function () {
        container.style.cursor = "default";
    });
}
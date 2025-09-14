(function () {
    const vscode = acquireVsCodeApi();

    // Restore state if available
    const prevState = vscode.getState();
    if (prevState && prevState.nodes && prevState.edges) {
        drawGraph(prevState.nodes, prevState.edges);
        document.getElementById("nodes").value = prevState.nodes.length;
        document.getElementById("edges").value = prevState.edges.map(e => `${e.from} ${e.to}`).join('\n');
    }

    document.getElementById("drawBtn").addEventListener("click", () => {
        const nodesCount = parseInt(document.getElementById("nodes").value.trim());
        const edgesText = document.getElementById("edges").value.trim().split("\n");

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
                edges.push({ from: a, to: b });
            }
        });

        vscode.setState({ nodes, edges }); // <-- Save state here
        drawGraph(nodes, edges);
    });
})();

function drawGraph(nodes, edges) {
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
            width: 2
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
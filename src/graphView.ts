import * as vscode from "vscode";

export class GraphViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = "graphVisualizer.view";

    constructor(private readonly _extensionUri: vscode.Uri) { }

    resolveWebviewView(
        webviewView: vscode.WebviewView,
        _context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
    ) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };

        webviewView.webview.html = this._getHtml(webviewView.webview);

        // Handle messages from the webview
        webviewView.webview.onDidReceiveMessage((message) => {
            switch (message.type) {
                case "alert":
                    vscode.window.showInformationMessage(message.text);
                    break;
            }
        });
    }

    private _getHtml(webview: vscode.Webview): string {
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "media", "main.js")
        );

        const styleUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "media", "style.css")
        );

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <title>Graph Visualizer</title>
            <link href="${styleUri}" rel="stylesheet">
            </head>
            <body>
            <div class="container">
                <div class="inputs">
                    <label>Nodes:</label>
                    <input type="number" id="nodes" placeholder="e.g. 3" />
                    <label>Edges:</label>
                    <textarea id="edges" placeholder="e.g. 0 1"></textarea>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="graphType" value="undirected" checked />
                            Undirected
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="graphType" value="directed" />
                            Directed
                        </label>
                    </div>
                    <button id="drawBtn">Draw Graph</button>
                </div>
                <div id="graph"></div>
            </div>
            <script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
            <script src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}


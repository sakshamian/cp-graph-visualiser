import * as vscode from "vscode";
import { GraphViewProvider } from "./graphView";

export function activate(context: vscode.ExtensionContext) {
	const provider = new GraphViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			GraphViewProvider.viewType,
			provider
		)
	);
}

export function deactivate() { }

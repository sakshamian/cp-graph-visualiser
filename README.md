# Graph Visualizer - VS Code Extension

A powerful Visual Studio Code extension designed for competitive programmers to visualize and test graph problems. Transform your nodes and edges input into beautiful, interactive graph visualizations with 0-indexed adjacency representation. No need of switching to external websites or drawing on paper while coding graph problems.

## 🌟 Features

- **Easy Graph Input**: Simple node and edge input format
- **Zero-Indexed Graphs**: Generates 0-indexed adjacency representation perfect for competitive programming
- **Visual Graph Display**: Interactive graph visualization within VS Code
- **Undirected Graph Support**: Currently supports undirected graphs with planned support for directed graphs
- **Competitive Programming Focused**: Designed with competitive programmers in mind
- **Lightweight**: Minimal performance impact on your VS Code environment

## 📦 Installation

## 📦 Installation

You can install **CP Graph Visualizer** directly from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=SakshamNegi.cp-graph-visualizer).

1. Open **Visual Studio Code**.  
2. Go to the **Extensions view** by clicking the square icon in the left Activity Bar or pressing `Ctrl+Shift+X`/`Cmd+Shift+X`.
3. In the search bar, type **cp-graph-visualizer**.  
4. Click **Install** on the extension published by `SakshamNegi`.  


## 📋 Requirements

- Visual Studio Code version 1.74.0 or higher
- No additional dependencies required

## 🗺️ Roadmap

- [ ] **Directed Graph Support**: Add support for directed graphs with arrow indicators
- [ ] **Custom Label Support**: Support for 1-indexed graphs and custom labels graph
- [ ] **Weighted Edges**: Support for edge weights visualization
- [ ] **Multiple Graph Formats**: Support for adjacency matrix input
- [ ] **Graph Templates**: Pre-built graph templates for common problems
- [ ] **Performance Metrics**: Display graph properties (diameter, density, etc.)
- [ ] **Theme Support**: Dark/light theme compatibility

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/graph-visualizer-vscode.git
   cd graph-visualizer-vscode
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Make Your Changes**
   - Create a new branch: `git checkout -b feature/your-feature-name`
   - Make your changes
   - Write tests if applicable

4. **Test Your Changes**
   ```bash
   npm run test
   npm run compile
   ```

5. **Submit a Pull Request**
   - Push your changes: `git push origin feature/your-feature-name`
   - Create a pull request with a clear description

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/graph-visualizer-vscode.git

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes during development
npm run watch

# Run tests
npm run test
```

## 🐛 Issues and Bug Reports

Found a bug or have a feature request? Please check our [Issues](https://github.com/sakshamian/cp-graph-visualiser/issues) page first to see if it's already been reported.

**When reporting bugs, please include:**
- VS Code version
- Extension version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📖 Examples

### Example 1: Simple Cycle
```
4
0 1
1 2
2 3
3 0
```

### Example 2: Complete Graph K5
```
5
0 1
0 2
0 3
0 4
1 2
1 3
1 4
2 3
2 4
3 4
```

### Example 3: Tree Structure
```
7
0 1
0 2
1 3
1 4
2 5
2 6
```

## 🏆 Acknowledgments

- Inspired by the competitive programming community
- Built with ❤️ for developers who love graphs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Star this project if you find it helpful!

Made with ⚡ for competitive programmers

**Happy Coding! 🚀**
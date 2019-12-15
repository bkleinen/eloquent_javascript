// npm install dijkstrajs
const {find_path} = require("dijkstrajs");

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}
test('dijkstra', () => {
    expect(find_path(graph, "Post Office", "Cabin")).toBe(["Post Office", "Alice's House", "Cabin"]);
});

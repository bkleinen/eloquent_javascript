// npm install dijkstrajs
const {find_path} = require("dijkstrajs");
const robots = require('./07_robot.js');
roadGraph = robots.roadGraph;

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}
test('dijkstra', () => {
    expect(find_path(graph, "Post Office", "Cabin")).toStrictEqual(["Post Office", "Alice's House", "Cabin"]);
});

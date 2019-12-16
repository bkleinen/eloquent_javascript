const {createServer} = require("http");
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
    for (let i = 0; i < 1000; i++) {
        response.write(`
    <h2>PS</h2>
    <p>I have something to add.</p>`);
    }
    response.write(`
    <h2>That's it.</h2>
    <p>Nothing more to add.</p>`);
    response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");


// open http://localhost:8000/hello

// node chapter20_node/09_server.js
test('starting server', done => {
    const {createServer} = require("http");
    let server = createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
        response.end();
    });
    server.listen(8000);
    console.log("Listening! (port 8000)");

    done();
});
test('request url', done => {
    const {request} = require("http");
    let requestStream = request({
        hostname: "eloquentjavascript.net",
        path: "/20_node.html",
        method: "GET",
        headers: {Accept: "text/html"}
    }, response => {
        expect(response.statusCode).toBe(302);
       // console.log("Server responded with status code",
        //    response.statusCode);
        done();
    });
    requestStream.end();

});

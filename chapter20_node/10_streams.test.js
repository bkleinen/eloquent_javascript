fs = require('fs');

test('write stream', done => {
    let fileName = 'chapter20_node/10_testfile.txt';
    let writeStream = fs.createWriteStream(fileName, {
        emitClose: true
    });
    writeStream.on('close', () => {
        //console.log("Stream was closed");
        let text = fs.readFileSync(fileName, "utf8");
        expect(text.length).toBe(26);
        done();
    });
    writeStream.write("Hello World\n");
    writeStream.write("two\n");
    writeStream.write("three\n");
    writeStream.write("end\n");
    writeStream.end();
});
/*
Readable streams are a little more involved. Both the request binding that
was passed to the HTTP server’s callback and the response binding passed to
the HTTP client’s callback are readable streams—a server reads requests and
then writes responses, whereas a client first writes a request and then reads
 a response. Reading from a stream is done using event handlers, rather than
 methods.

 Readable streams have "data" and "end" events. The first is fired every time
 */

/*
node chapter20_node/10_client.js
node chapter20_node/10_server.js
 */
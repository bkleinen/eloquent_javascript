let {readFile, writeFile} = require("fs");

test('readfile example', done => {
    readFile("chapter20_node/08_file.txt", "utf8", (error, text) => {
        if (error) throw error;
        expect(text).toBe("Hello Node");
        done();
    });
});

test('binary file', done => {
    readFile("chapter20_node/08_file.txt", "utf8", (error, buffer) => {
        if (error) throw error;
        // console.log("The file contained", buffer.length, "bytes.",
        //     "The first byte is:", buffer[0]);
        expect(buffer.length).toBe(10);
        expect(buffer[0]).toBe('H');
        done();
    });

});

test('write file', done => {
    writeFile("chapter20_node/08_graffiti.txt", "Node was here", err => {
        if (err) console.log(`Failed to write file: ${err}`);
        else console.log("File written.");
        done();
    });

});

/*
The fs module contains many other useful functions: readdir will return
the files in a directory as an array of strings, stat will retrieve
information about a file, rename will rename a file, unlink will remove
one, and so on. See the documentation at https://nodejs.org for specifics.
 */

const fsp = require("fs").promises;

test('fs with promises', done => {
    fsp.readFile("chapter20_node/08_file.txt", "utf8")
        .then(text => {
            expect(text).toBe("Hello Node");
            done();
        });
});

const {readFileSync} = require("fs");
test('read file sync', () => {
    let text = readFileSync("chapter20_node/08_file.txt", "utf8");
    expect(text).toBe("Hello Node");
});

import fs from "fs";
import { pipeline } from "stream";
import { createServer } from "http";

const server = createServer();

server.on('request', (request, response) => {
    const readableStream = fs.createReadStream('../data/big.txt', {highWaterMark: 16384});
    console.log(readableStream.readableHighWaterMark);
    pipeline(
        readableStream,
        response,
        error => {
            if (error) {
                return console.log(`Pipeline fail with error: ${error}`);
            }
    
            console.log('Pipeline succeed');
        }
    );
    // BAD PRACTICE
    // fs.readFile('../data/big.txt', (err, data) => {
    //     if (err) throw err;

    //     response.end(data);
    // });
});

server.listen(3030);
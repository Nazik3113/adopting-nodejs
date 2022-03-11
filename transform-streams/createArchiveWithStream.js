import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";

const file = process.argv[2];

pipeline(
    fs.createReadStream(file),
    zlib.createGzip().on('data', () => {
        process.stdout.write(".");
    }),
    fs.createWriteStream(`${file}.gz`),
    error => {
        if (error) {
            return console.log(`\nPipeline fail with error: ${error}`);
        }

        console.log('\nPipeline succeed');
    }
);
//node createArchiveWithStream.js ../data/big.txt
import { Writable, pipeline } from "stream";
import StorageReager from "./readable.js";

class StorageWriter extends Writable {
    constructor(options) {
        super(options);

        const {
            objectMode,
            highWaterMark,
            decodeStrings,
            getBuffer
        } = this._writableState;

        console.log('objectMode', objectMode);
        console.log('highWaterMark', highWaterMark);
        console.log('decodeStrings', decodeStrings);
        console.log('getBuffer', getBuffer);
    }

    _write(chunk, encoding, done) {
        console.log(chunk);
        done();
    }
};

const data = ['1', '2', '3'];
const r_options = {encoding: 'utf8'};
const rs = new StorageReager(data, r_options);

const w_options = {decodeStrings: false};
const ws = new StorageWriter(w_options);

pipeline(
    rs, 
    ws,
    error => {
        if (error) {
            return console.log(`Pipeline fail with error: ${error}`);
        }

        console.log('Pipeline succeed');
    }
);
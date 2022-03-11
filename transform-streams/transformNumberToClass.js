import Readable from "./sourse/readable.js";
import Writable from "./sourse/writable.js";
import Chunk from "./sourse/chunk.js";
import { Transform, pipeline } from "stream";

class Transformer extends Transform {
    constructor(options = {}) {
        super(options);

        const {
            objectMode,
            highWaterMark,
            decodeStrings
        } = this._writableState;

        console.log("\n ------ Transform");
        console.log('objectMode', objectMode);
        console.log('highWaterMark', highWaterMark);
        console.log('decodeStrings', decodeStrings);
        console.log('buffer', this._writableState.getBuffer());

        this.init();
    }

    init() {
        this.on('close', () => {
            console.log("\n -------- Transform on close");
        });

        this.on('drain', () => {
            console.log("\n --------- Transform on drain");
        });

        this.on('error', (error) => {
            console.log("\n --------- Transform on error: " + error);
        });

        this.on('fifnish', () => {
            console.log("\n --------- Transform on finish");
        });

        this.on('end', () => {
            console.log("\n --------- Transform on end");
        });

        this.on('pipe', () => {
            console.log("\n --------- Transform on pipe");
        });
    };

    _transform(chunk, encoding, done) {
        this.push(new Chunk(chunk));
        done();
    };

    _flush(done) {
        console.log('do something before stream is finished');
        done();
    };
};

const data = ['1', '2', '3'];

const r_options = {
    encoding: 'utf8',
};
const rs = new Readable(data, r_options);

const t_options = {
    readableObjectMode: true,
    // writableObjectMode: true,
    decodeStrings: false
};

const ts = new Transformer(t_options);

const w_options = {
    objectMode: true
};

const ws = new Writable(w_options);

pipeline(
    rs,
    ts,
    ws,
    error => {
        if (error) {
            return console.log(`Pipeline fail with error: ${error}`);
        }

        console.log('Pipeline succeed');
    }
);
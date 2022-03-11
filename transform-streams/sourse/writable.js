import { Writable } from "stream";

class SourceWritable extends Writable {
    constructor(options) {
        super(options);
    };

    _write(chunk, encoding, done) {
        console.log(chunk);
        done();
    };
};

export default SourceWritable;
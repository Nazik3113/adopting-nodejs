import { Readable } from "stream";

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing
        } = this._readableState;

        console.log('objectMode', objectMode);
        console.log('highWaterMark', highWaterMark);
        console.log('buffer', buffer);
        console.log('length', length);
        console.log('flowing', flowing);

        this.init();
    };

    init() {
        this.on('data', (chunk) => {
            console.log('\n--');
            console.log(`chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(chunk)} and chunk length is ${chunk.length}`);
        });
    };

    _read() {
        const data = this.data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    };
};

const array = ['1', '2', '3'];

const options = {};
const rs = new StorageReader(array, options);

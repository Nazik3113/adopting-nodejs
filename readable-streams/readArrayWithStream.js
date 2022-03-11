import { Readable } from "stream";

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
        this.init();
    }

    init() {
        this.on('data', (chunk) => {
            console.log('\n--');
            console.log(`chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(chunk)} and chunk length is ${chunk.length}`);
            this.pause();
            setTimeout(() => {
                this.resume();
            }, 2000);
        });
    }

    _read() {
        const data = this.data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    }
}

const array1 = ['1', '2', '3'];

const options1 = {encoding: 'utf8', highWaterMark: 1};
const rs1 = new StorageReader(array1, options1);

const array2 = [1, 2, 3];

const options2 = {objectMode: true, highWaterMark: 1};
const rs2 = new StorageReader(array2, options2);
import { Readable } from "stream";

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this._data = data;
        this.on('data', chunk => {});
    };
    _read() {
        const data = this._data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    };
};

export default StorageReader;
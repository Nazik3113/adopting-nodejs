import { EventEmitter } from "events";

const storage = new EventEmitter();

// throw
storage.emit('error', 'Some error');
storage.emit('error', new TypeError('Some error'));
import { EventEmitter } from "events";

const storage = new EventEmitter();
const ERROR_EVENT = 'error';

storage.on(ERROR_EVENT, (error) => {
    if (error.name === 'TypeError') {
        console.log(`Received ${error.name} with a message: ${error.message}`);
    } else if (error.name === 'Error') {
        console.log(`Received ${error.name} with a message: ${error.message}`);
    } else {
        console.log('Do some stuff');
    }
});

// throw
storage.emit(ERROR_EVENT, 'Some error');
storage.emit(ERROR_EVENT, new TypeError('Some error'));
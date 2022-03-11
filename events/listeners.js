import { EventEmitter } from "events";

const storage = new EventEmitter();
const eventName = 'data';

storage.on(eventName, (data) => {
    if (data.age >= 21) {
        data.valid = true;
    }
});

storage.on(eventName, (data) => {
    console.log(data);
});

const listeners = storage.listeners(eventName);

console.log(listeners);
import { EventEmitter } from "events";

const loop = new EventEmitter();
const EVENT_1 = 'event1';
const EVENT_2 = 'event2';

loop.on(EVENT_1, () => {
    setImmediate(() => {
        console.log(EVENT_1);
        loop.emit(EVENT_2);
    });
});

loop.on(EVENT_2, () => {
    setImmediate(() => {
        console.log(EVENT_2);
        loop.emit(EVENT_1);
    });
});

loop.emit(EVENT_1);
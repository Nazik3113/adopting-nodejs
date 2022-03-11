import { EventEmitter } from "events";

const loop = new EventEmitter();
const EVENT_1 = 'event1';
const EVENT_2 = 'event2';

loop.once('newListener', (event, listener) => {
    if (event === EVENT_1) {
        loop.on(EVENT_1, () => {
            console.log('First event handler');
        });
    }
});

loop.on(EVENT_1, () => {
    console.log('Second event handler');
}); 

loop.on(EVENT_2, () => {
    console.log('Third event handler');
});

loop.emit(EVENT_1);
loop.emit(EVENT_2);
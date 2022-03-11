import { EventEmitter } from "events";

const loop = new EventEmitter();
const EVENT_1 = 'event1';

loop.once('newListener', (event, listener) => {
    if (event === EVENT_1) {
        loop.on(EVENT_1, () => {
            console.log('First event handler');
        });
    }
});

const func = () => {
    console.log('Second event handler');
};

loop.on(EVENT_1, func); 

loop.emit(EVENT_1);

loop.off(EVENT_1, func);

loop.emit(EVENT_1);
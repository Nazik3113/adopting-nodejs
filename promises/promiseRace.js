`use strict`

const Async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Fisrt promise');
        resolve(1);
    }, 4000);
});

const Async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promise');
        resolve(2);
    }, 1000);
});

Promise.race([Async1, Async2])
    .then((firstPromiseValue) => {
        console.log('Ok', firstPromiseValue);
    })
    .catch(() => {
        console.log('Nope');
    });
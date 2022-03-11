`use strict`

const promise = new Promise((resolve, reject) => {
    console.log('Promise 1'); // 1

    setTimeout(() => {
        resolve(10);
    }, 2000);
});

promise
    .then((data) => {
        console.log(`Resolved ${data}`);
    })
    .catch((error) => {
        console.log(error); // 3
    });

console.log('Hi'); // 2
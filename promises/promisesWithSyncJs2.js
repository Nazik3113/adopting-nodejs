import { resolve } from "path/posix"

`use strict`

function Async() {
    const promise = new Promise((resolve, reject) => {
        console.log('Promise init'); // 1

        setTimeout(() => {
            console.log('resolving...'); // 3
            resolve();
        }, 2000);
    });

    return promise;
};

const promise = Async();

promise 
    .then(() => {
        console.log('then'); // 4
    })
    .catch((error) => {
        console.log(error);
    });

console.log('next step'); // 2
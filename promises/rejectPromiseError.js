`use strict`

// BAD PRACTICE
// process.on('unhandledRejection', () => {
    // console.log('Promise error');
// });

function Async() {
    const promise = new Promise((resolve, reject) => {
        console.log('Promise init'); // 1

        setTimeout(() => {
            console.log('rejecting...');
            reject();
        }, 2000);
    });

    return promise;
};

const promise = Async();
console.log('Next step');
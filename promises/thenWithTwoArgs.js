`use strict`

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

const promise = Async()
    .then(
        () => {
            console.log('Resolve');
        },
        () => {
            console.log('Reject');
        }
    );
    
console.log('Next step');
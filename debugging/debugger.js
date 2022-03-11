import { promises as fsPromises} from "fs";

fsPromises.readFile("../data/big.txt")
    .then((data) => {
        console.log(data);
        debugger;
    })
    .catch((error) => {
        console.log(error.message);
        debugger;
    });

// node --inspect-brk debugger.js
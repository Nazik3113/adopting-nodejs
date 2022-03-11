import { promises as fsPromises } from "fs";

fsPromises.stat("../data/big.txt")
    .then((stats) => {
        console.log(stats);
    })
    .catch((error) => {
        console.log(error);
    });
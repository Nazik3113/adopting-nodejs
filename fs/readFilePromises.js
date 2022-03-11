import { promises as fsPromises } from "fs";

fsPromises.readFile("../data/big.txt")
    .then(data => {
        console.log(data.toString());
    })
    .catch(error => {
        console.log(error);
    });
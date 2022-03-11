import { promises as fsPromise } from "fs";

fsPromise.unlink("../data/big.txt.gz")
    .catch(error => {
        console.log(error);
    });
import fs from "fs";

const callback = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
};

fs.readFile("../data/big.txt", callback);
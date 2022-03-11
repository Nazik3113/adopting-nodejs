import { promises as fsPromise } from "fs";

fsPromise.readdir("../data")
    .then((files) => {
        console.log(files);
    })
    .catch((error) => {
        console.log(error);
    });
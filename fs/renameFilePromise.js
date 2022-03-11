import { promises as fsPromises } from "fs";

const path = "../data";
const sourse = "dummy_data.txt";
const destination = "renamed_dummy_data_promise.txt";

fsPromises.rename(`${path}/${sourse}`, `${path}/${destination}`)
    .catch(error => {
        console.log(error);
    });
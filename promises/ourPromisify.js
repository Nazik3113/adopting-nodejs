import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const readFileCustom = (filename) =>  {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        });
    });
}


readFileCustom(__filename)
    .then(data => {
        console.log(data.toString());
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Done');
    });
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const convertFileToArray = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                return reject(error);
            }
    
            const lines = data
                .toString()
                .trim()
                .split('\n');

            resolve(lines);
        });
    });
};

convertFileToArray(__filename)
    .then(lines => {
        console.log(`Lines count: ${lines.length}`);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Done');
    });
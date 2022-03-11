import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const convertFileToArray = (file, cb = () => {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                reject(error);
                return cb(error);
            }
    
            const lines = data
                .toString()
                .trim()
                .split('\n');
                
            resolve(lines);   
            cb(null, lines);
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

convertFileToArray(__filename, (error, lines) => {
    if (error) throw error;

    console.log(`Lines count: ${lines.length}`);
});
import fs from "fs";
import { promisify } from "util";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const readFile = promisify(fs.readFile);

readFile(__filename)
    .then((buffer) => {
        return buffer.toString();
    })
    .then((string) => {
        console.log(string);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Done');
    });
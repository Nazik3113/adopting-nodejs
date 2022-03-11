import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const convertFileToArray = (file, callBack) => {
    fs.readFile(file, (error, data) => {
        if (error) {
            return callBack(error);
        }

        const lines = data
            .toString()
            .trim()
            .split('\n');
        callBack(null, lines);
    });
};

convertFileToArray(__filename, (error, lines) => {
    if (error) throw error;

    console.log(`Lines count: ${lines.length}`);
});
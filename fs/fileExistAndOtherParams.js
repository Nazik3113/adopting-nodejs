import { constants, promises as fsPromise } from "fs";

const exist_file = "../data/big.txt";
const not_exist_file = "../data/dwadwaidba.txt";

// file exist
fsPromise.access(exist_file, constants.F_OK)
    .then(() => {
        console.log(`File ${exist_file} is exist`);
    })
    .catch((error) => {
        console.log(`File ${exist_file} is not exist or error: ${error}`);
    });

// file not exist
fsPromise.access(not_exist_file, constants.F_OK)
    .then(() => {
        console.log(`File ${exist_file} is exist`);
    })
    .catch((error) => {
        console.log(`File ${exist_file} is not exist or error: ${error}`);
    });

// does we have an write access
fsPromise.access("../data/big.txt", constants.W_OK)
    .then(() => {
        console.log(`We have a write access to file: ${exist_file}`);
    })
    .catch((error) => {
        console.log(`We does not have a write access to file: ${exist_file} or error: ${error}`);
    });

// does we have a read access
fsPromise.access("../data/big.txt", constants.R_OK)
    .then(() => {
        console.log(`We have a read access to file: ${exist_file}`);
    })
    .catch((error) => {
        console.log(`We does not have a read access to file: ${exist_file} or error: ${error}`);
    });

// does we have an execute access
fsPromise.access("../data/big.txt", constants.X_OK)
    .then(() => {
        console.log(`We have an execute access to file: ${exist_file}`);
    })
    .catch((error) => {
        console.log(`We does not have an execute access to file: ${exist_file} or error: ${error}`);
    });

// file exist and we have read access
fsPromise.access(exist_file, constants.F_OK & constants.R_OK)
    .then(() => {
        console.log(`File ${exist_file} is exist and we have read access to it.`);
    })
    .catch((error) => {
        console.log(`File ${exist_file} is not exist, we have no read access or error: ${error}`);
    });
import { promises as fsPromises } from "fs";

const dummy_data = 'Hello World from promise!';

fsPromises.writeFile("../data/dummy_data.txt", dummy_data)
    .catch(error => {
        console.log(error);
    });
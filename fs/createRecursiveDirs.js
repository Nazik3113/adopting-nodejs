import { promises as fsPromises } from "fs";

fsPromises.mkdir(`../data/some_dymmy_dir/${Date.now()}/`, {recursive: true})
    .then(() => {
        console.log("Dirs created");
    })
    .catch((error) => {
        console.log(error);
    });
import fs from "fs";

fs.readdir("../data", (error, files) => {
    if (error) throw error;

    console.log(files);
});
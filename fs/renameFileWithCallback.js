import fs from "fs";

const path = "../data";
const sourse = "dummy_data.txt";
const  destination = "renamed_dummy_data.txt";

const callback = (error) => {
    if (error) throw error;
};

fs.rename(`${path}/${sourse}`, `${path}/${destination}`, callback);
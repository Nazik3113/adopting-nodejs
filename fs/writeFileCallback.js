import fs from "fs";

const callback = (error) => {
    if (error) throw error;
};

const dummy_data = "Hello world";

fs.writeFile("../data/dummy_data.txt", dummy_data, callback)
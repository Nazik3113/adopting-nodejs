import fs from "fs";
const file = fs.createWriteStream('./data/example.txt');

file.write("hello,\n");
file.write("hello,\n");
file.write("hello,\n");
file.end();
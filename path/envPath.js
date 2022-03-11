import path from "path";

console.log(path.delimiter);
console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));
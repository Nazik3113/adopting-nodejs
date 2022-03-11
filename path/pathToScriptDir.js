import path from "path";

console.log(path.resolve());

console.log(path.resolve('soome_dir', `${Date.now()}-file.log`));
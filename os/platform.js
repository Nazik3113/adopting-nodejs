import os from "os";

console.log(os.platform());

console.log(process.platform);

console.log(os.platform() === process.platform);
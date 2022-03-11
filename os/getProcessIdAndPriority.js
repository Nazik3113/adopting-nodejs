import process from "process";
import os from "os";

console.log(process.pid);

console.log(os.getPriority(process.pid));
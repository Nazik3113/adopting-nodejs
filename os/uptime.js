import os from "os";

const uptime = os.uptime();
const uptimeMin = Math.round(uptime / 60); 
const uptimeMour = Math.round(uptime / 60 / 60); 
const uptimeDay = Math.round(uptime / 60 / 60 / 24); 

console.log(`Uptime ${uptime} sec`);
console.log(`Uptime ${uptimeMin} mins`);
console.log(`Uptime ${uptimeMour} hours`);
console.log(`Uptime ${uptimeDay} days`);

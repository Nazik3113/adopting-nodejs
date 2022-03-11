import debug from "debug";

const debugLog1 = debug('marker:1');
const debugLog2 = debug('marker:2');

debugLog1("Message 1");

console.log("Message 2");

debugLog2("Message 3");

// DEBUG=marker:1,marker:2 node debug_package.js
// DEBUG=marker:* node debug_package.js
// DEBUG=* node debug_package.js  
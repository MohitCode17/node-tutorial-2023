// Require OS module
const os = require('os');

// Return CPU Architecture(32 bytes and 64 bytes and Many more...)
console.log("Architecture -->>", os.arch());

// Return free amount of memory of os in bytes
console.log("Free Memory -->>", os.freemem());

// Return total amount of memory of os in bytes
console.log("Total Memory -->>", os.totalmem());

// Return list of network interfaces
console.log("Network Interfaces -->>", os.networkInterfaces());

// Return default directory for temp files
console.log("Temp Directory -->>", os.tmpdir());

// Return Hostname of system
console.log("Hostname -->>", os.hostname());

// Return operating system name (linux, window, mac etc..)
console.log("OS Type -->>", os.type());

// Return platform of os (linux, win32, darwin, freebsd, sunos etc...)
console.log("Os Platform -->>", os.platform());

// Return os release
console.log("Release -->>", os.release());

const os = require('os')

// get os
console.log(os.platform())

// get cpu architecture
console.log(os.arch())

// get cpu core
console.log(os.cpus())

// free memory
console.log(os.freemem())

// total memory
console.log(os.totalmem())

// home directory
console.log(os.homedir())

// up time
console.log(os.uptime()/3600)
const pos = require('os')

//Info about current user 
const user = pos.userInfo()
console.log(user)

//Method returns the system uptime in seconds
console.log(`The System Uptime is ${pos.uptime()} seconds`)

const currentOS = {
    name: pos.type(),
    release: pos.release(),
    totalMem: pos.totalmem(),
    freeMem: pos.freemem(),
}

console.log(currentOS)
const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//return sustem uptime 
console.log(`The system uptime is: ${(os.uptime()/3600).toFixed(2)} hours`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)
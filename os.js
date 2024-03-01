const os = require('os');
const path = require('path');
// console.log(os);
const user = os.userInfo();
// console.log(user);

// method returns the system uptime(how long the computer has been running)

// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemmory: os.totalmem(),
  freeMemmory: os.freemem(),
};

// console.log(currentOs);
const filePath = path.join('/top-folder', 'sub-folder', 'test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);

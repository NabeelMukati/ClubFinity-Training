const path = require('path');

console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const abolute = path.resolve(__dirname, 'content', 'hour1:function')
console.log(abolute)

// const os = require('os');

// //info about current user.
// const user = os.userInfo()
// console.log(user)

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     realease:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),

// }
// console.log(currentOS);



const fs = require('fs');

// 👉 Create File

fs.writeFileSync('test.txt', 'This is demo text');

// 👉 Append Text in existing file
fs.appendFileSync('test.txt', '\n\n This is another text')

// 👉 Read File
const readFile = fs.readFileSync('test.txt', 'utf-8');
// console.log(readFile);

// 👉 Rename File
fs.renameSync("test.txt", "read.txt");
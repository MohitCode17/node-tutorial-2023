const fs = require('fs');

// 👉 Create File

// fs.writeFile('text.txt', 'This is demo file', (err)=>{
//     if (err) throw err;
//     console.log("File created successfully!")
// })


// 👉 Append File

// fs.appendFile('text.txt', '\nMore data', (err) => {
//     if (err) throw err;
//     console.log("Data Append successfully!")
// })


// 👉 Read File

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// 👉 Rename File

// fs.rename('text.txt', 'rename.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename successfully')
// })


// Exit on uncaught error

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error : ${err}`)
//     process.exit(1);
// })
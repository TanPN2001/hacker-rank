// let fs = require("fs");

// let data = "";

// let readerStream = fs.createReadStream("tan.txt");

// readerStream.setEncoding("UTF8");

// readerStream.on("data", (chunk) => {
//   data += chunk;
// });

// readerStream.on("end", () => console.log(data));

// readerStream.on("error", (err) => console.log(err));

// console.log("END");



// const fs = require('fs')

// let data = "Tan dep trai qua di"

// let writeStream = fs.createWriteStream('Tan2.txt')

// writeStream.write(data, 'UTF8')

// writeStream.end()

// writeStream.on('finish', ()=> console.log('OK'))



console.log(process.env);

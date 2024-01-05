const { log } = require('console');
const fs = require('fs');

const content = fs.readFileSync("README.md", "utf8");

const wordContent = content.split(" ");
let count = 0
// const filtrado = wordContent.filter((word) => word === "React").length;
// for (let i = 0; i < wordContent.length; i++) {
//     if (wordContent[i] === "React") {
//         count++;
//     }
// }

const filter2 = content.match(/react/gi ?? []).length;

console.log(filter2);


// npm i -D nodemon ----------> la D significa que es de desaroollo, nodemon es para que se reinicie el servidor
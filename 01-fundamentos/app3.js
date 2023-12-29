const { log } = require('console');
const fs = require('fs');

const content = fs.readFileSync("README.md", "utf8");

const wordContent = content.split("React");

console.log(wordContent);



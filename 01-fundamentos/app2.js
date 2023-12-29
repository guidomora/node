const fs = require('fs');

const data = fs.readFileSync("README.md", "utf8");

const newData = data.replace(/React/ig, "Guido esta reemplazando"); // se reemplaza la palabra react por "Guido esta reemplazando"

fs.writeFileSync("README-guido.md", newData); // se crea un nuevo archivo con el contenido modificado
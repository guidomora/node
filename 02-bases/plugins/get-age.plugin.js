// Si el dia de manana cambia la libreria get-age,
// solo tengo que modificar este archivo y no todos los archivos que usan esta funcion

const getAgePlugin = require("get-age");

const getAge = (birthDate) => {
    if(!birthDate) throw new Error("birthDate is required");

    return getAgePlugin(birthDate);
}

module.exports = {
    getAge
}
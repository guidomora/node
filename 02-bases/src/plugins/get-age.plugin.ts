// Si el dia de manana cambia la libreria get-age,
// solo tengo que modificar este archivo y no todos los archivos que usan esta funcion

const getAgePlugin = require("get-age");

export const getAge = (birthDate:string) => {
    

    return getAgePlugin(birthDate);
}


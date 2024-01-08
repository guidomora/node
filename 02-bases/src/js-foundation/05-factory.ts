// const {v4: uuidv4} = require('uuid');
// const {getAge} = require("../plugins/get-age.plugin.js");  // importo la funcion getAge del plugin get-age.plugin.js creada por nosotros
// const {getId} = require("../plugins/get-id.plugin.js");  // importo la funcion getId del plugin get-id.plugin.js creada por nosotros
const { getId, getAge } = require("../plugins"); // importo la funcion getId y getAge del plugin index.js creado por nosotros

// factory functions, son funciones que crean otras funciones

interface BuildMakePersonOptions {
  getId: () => string;
  getAge: (birthDate: string) => number;
}

interface Person {
  name: string;
  birthDate: string;
}


const obj = {
  name: "Luis",
  birthDate: "1990-01-01",
};

export const buildMakePerson = ({getId, getAge}:BuildMakePersonOptions) => {
  // no es recomendable poner las funciones asi (uuidv4, getAge) porque se pueden cambiar en el futuro
  // y seria un quilombo, lo mejor es usar un patron de diseño ---> factory functions
  // y el codigo sea tolerante a cambios y mas sencillo de aplicarlos
  return ({ name, birthDate }:Person) => {
    return {
      id: getId(), // antes era uuidv4(),
      name,
      birthDate,
      age: getAge(birthDate), // antes era getAge(birthDate),
    };
  };
};

// const person = buildPerson(obj);

// console.log(person);


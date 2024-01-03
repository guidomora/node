
// Formas tradicionales de importacion

const { buildPerson } = require("./js-foundation/05-factory")

// const templateExports = require('./js-foundation/01-template');
// const { emailTemplate } = require('./js-foundation/01-template');

// require("./js-foundation/02-destructuring")
// require("./js-foundation/03-callbacks")

// const {getUserById} = require("./js-foundation/03-callbacks")
// const {getUserById} = require("./js-foundation/04-arrow")

// console.log(emailTemplate);


// recibe el id y una funcion, que seria el callback

// funcion tradicional
// getUserById(2, function(error, user){
//     if (error) {
//         throw new Error(error, 1); 
//     }
//     console.log("Usuario", user);
// });

// getUserById(1, (error, user) => {
//     if (error) {
//         throw new Error(error, 1); 
//     }
//     console.log("Usuario", user);
// });


// Factory functions -------------------------------

// const {getAge, getId} = require("./plugins")

// const { buildMakePerson } = require("./js-foundation/05-factory")

// const makePerson = buildMakePerson({getAge, getId})

// const obj = {
//     name: "Luis",
//     birthDate: "1990-01-01",
//   };

// const person = makePerson(obj)
// console.log(person);

// --------------------------------------
const {getPokemonById} = require("./js-foundation/06-promises")

getPokemonById(1, (pokemon) => {
    console.log({pokemon});
})
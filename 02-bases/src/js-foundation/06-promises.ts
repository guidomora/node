// Promesas en cadena
// Este callback se ejecuta cuando la promesa se resuelve y nos 
// serviria para hacer algo con la informacion que nos devuelve la promesa
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     return fetch(url).then((response) => {
//         return response.json() // parsea la respuesta a json
//     })
//     // maneja el resultado de la promesa
//     .then((pokemon) =>  pokemon.name) // info del pokemon
//     // .then(() => {throw new Error('Error al obtener el pokemon')})
// }

const { http } = require("../plugins");

// --------------------------------------
// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const response = await fetch(url)
//     const pokemon = await response.json()
//     return pokemon.name
// }

// --------------------------------------



export const getPokemonById = async (id:string|number):Promise<string> => { // promesa que retorna un string
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await http.get(url)
    return pokemon.name
}


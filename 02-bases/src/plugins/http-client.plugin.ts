// Patron adaptador que envuelve el fetch api
import axios from 'axios';


export const httpClientPlugin = {
    get: async (url:string) => {
        // const response = await fetch(url)
        // return await response.json()
        try {
            const {data} = await axios.get(`${url}`);
            console.log(data.name);
          } catch (error) {
            console.error(error);
          }
    }
}




// module.exports = {
//     http: httpClientPlugin  // le cambiamos el nombre para que no se confunda con el nombre del modulo
// };
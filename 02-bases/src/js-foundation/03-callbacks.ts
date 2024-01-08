interface User {
    id: number;
    nombre: string;
}


const users = [
  { id: 1, nombre: "Fernando" },
  { id: 2, nombre: "Melissa" },
];


// recibe el id y un callback
// el callback recibe un error y un usuario
export function getUserById(id:number, callback:(err?:string, user?:User) => void) {
    const user = users.find(function(user){
        return user.id === id;
    })

    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`); // el primer argumento es el error
    }

    return callback(undefined, user);
}


module.exports = {
    getUserById
}   
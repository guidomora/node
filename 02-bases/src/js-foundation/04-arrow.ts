interface User {
  id: number;
  nombre: string;
}


const users:User[] = [
    { id: 1, nombre: "Fernando" },
    { id: 2, nombre: "Melissa" },
  ];
  
  
// recibe el id y un callback
// el callback recibe un error y un usuario
// funcion tradicional
//   function getUserById(id, callback) {
//       const user = users.find(function(user){
//           return user.id === id;
//       })
  
//       if (!user) {
//           return callback(`USUARIO NO ENCONTRADO ${id}`); // el primer argumento es el error
//       }
  
//       return callback(null, user);
//   }

  export const getUserById = (id:number, callback: (error?:string, user?:User) => void) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }

    return callback(undefined, user);
  }
  
  

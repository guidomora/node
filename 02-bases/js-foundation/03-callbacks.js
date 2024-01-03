const users = [
  { id: 1, nombre: "Fernando" },
  { id: 2, nombre: "Melissa" },
];


// recibe el id y un callback
// el callback recibe un error y un usuario
function getUserById(id, callback) {
    const user = users.find(function(user){
        return user.id === id;
    })

    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`); // el primer argumento es el error
    }

    return callback(null, user);
}


module.exports = {
    getUserById
}   
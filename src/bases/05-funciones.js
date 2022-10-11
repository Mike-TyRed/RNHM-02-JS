//funciones

/* const saludar = function (nombre) {
  return `hola, ${nombre}`;
}; */

//funcion flecha
/* const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
}; */

//solo return
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `siuuu`;

/* console.log(saludar3("eldenring"));
console.log(saludar4()); */

//return objeto implicito
const getUser = () => ({
  uid: "1",
  username: "el bicho"
});

/* const user = getUser();
console.log(getUser()); */

/* tarea
1. transofrmen a una funcion flecha
2. debe retornar un objeto implicito
3. pruebas
 */
const getUsuarioActivo = (nombre) => ({
  uid: "2",
  username: nombre
});

const UsuarioActivo = getUsuarioActivo("mini pekka");
console.log(UsuarioActivo);

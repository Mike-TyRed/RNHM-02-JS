//Operadores condicionales ternarios
const activo = true;

/*
//Default 
let mensaje = "";

if (!activo) {
  mensaje = "activo";
} else {
  mensaje = "inactivo";
}
console.log(mensaje); 
*/

//Simple
//const mensaje = activo ? "Activo" : "Inactivo";

//Simple2
//const mensaje = activo === true ? "Activoo" : "Inactivo";

//Ejecutar code cuando cumpla condicion
//const mensaje = activo === true ? "Activoo" : null;

//Condicion simple y si es falsa no hacer nada
const mensaje = activo && "Activooo";

console.log(mensaje);

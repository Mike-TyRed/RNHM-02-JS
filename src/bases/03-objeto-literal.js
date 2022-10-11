//objetos literales

const persona = {
  nombre: "mike",
  apellido: "tr",
  edad: 23,
  direccion: {
    ciudad: "tijuana",
    zip: 22465,
    lat: 1231234,
    lng: 63454345
  }
};

console.log(persona);
//console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "arturo";

console.log(persona2);

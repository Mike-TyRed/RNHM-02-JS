//desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1.- primer valor "nombre"
//2.- set nombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    }
  ];
};

//desestructuracion del arreglo
const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();

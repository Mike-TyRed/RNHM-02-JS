//Desestreuctucacion

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Cabo"
};

//crea constante que recupera el contenido
const { nombre, edad, clave } = persona;

//console.log(nombre, edad, clave);

const useContext = ({ clave, nombre, edad, rango = "siuu" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12312,
      lng: -895849
    }
  };
};

//Desestructurado
const { nombreClave, anios, latlng } = useContext(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

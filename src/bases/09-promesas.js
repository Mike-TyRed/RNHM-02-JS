import { getHeroeById } from "../src/bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve();
    const heroe = getHeroeById(1);
    resolve(heroe);
    //reject("No se encontro el heroe");
  }, 2000);
});

//promesa ejecutada correctamente
promesa
  .then((heroe) => {
    console.log("heroe", heroe);
  }) //avisa de error
  .catch((err) => console.warn(err)); */

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }
    }, 2000);
  });
};

getHeroByIdAsync(1)
  /* .then((heroe) => {
    console.log("heroe", heroe);
  }) */
  .then(console.log)
  //.catch((err) => console.warn(err));
  .catch(console.warn);

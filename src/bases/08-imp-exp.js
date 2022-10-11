import { heroes, owners } from "../data/heroes";
//console.log(owners);

//normal
/* const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
}; */

//simple
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeById(2));

//
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
/* console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel")); */

export { getHeroeById };

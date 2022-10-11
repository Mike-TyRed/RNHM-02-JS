const apiKey = "SRbw3bbUDbqGsewaPGiTFkFLmcfeJuOU";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

/* peticion
  .then((resp) => {
    //retorna una promesa que resuelve desde la api
    resp.json().then((data) => {
      console.log(data);
    });
  })
  .catch(console.warn); */

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    //console.log(data.images.original.url);
    //Promesas en cadena y como funciona el fetchAPI
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

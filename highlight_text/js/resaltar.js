//Se crea una instancia del botón con id "btn"
let btn = document.getElementById("btn");
//Se crea una instancia de mark.js que contiene todos los párrafos
let markInstance = new Mark(document.querySelector(".context"));
//Variable que define las opciones con las que trabaja la función mark.
let options = {
  debug: false,
  diacritics: false,
  separateWordSearch: false,
};
let contador = 0;

function ResaltarTexto(palabras) {
  btn.addEventListener("click", function () {
    console.log("Funciona");
    contador += 1;
    if (contador >= palabras.length) {
      console.log("Nothing to do!");
    } else {
      console.log(contador);
      console.log(palabras[contador]);
      markInstance.unmark({
        done: function () {
          markInstance.mark(palabras[contador], options);
        },
      });
    }
  });
}

//Función que resalta una palabra al iniciar el html
function ResaltarUno(palabras) {
  markInstance.mark(palabras[0], options);
}


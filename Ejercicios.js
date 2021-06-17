"use strict";
const EjUno = document.querySelector("#EjUno");
var numeroUno;
var numeroDos;
EjUno.addEventListener("click", function sumar(numeroUno, numeroDos) {
  var suma = 0;
  var numeroUno = parseInt(prompt("primer número"));
  var numeroDos = parseInt(prompt("Segundo número"));
  (suma = numeroUno + numeroDos);
  console.log("La suma es:" + suma);
});

const EjDos = document.querySelector("#EjDos");
EjDos.addEventListener("click", function sumar() {
  var i;
  var array_n = new Array(5);
  var sumar = 0;
  for (i = 0; i <= 5; i++) {
    array_n[i] = parseInt(prompt("Introducir un numero para la lista"));

    sumar += array_n[i];
  }
  console.log("La suma total de la lista es: " + sumar);
});

const EjTres = document.querySelector("#EjTres");
EjTres.addEventListener("click", function c(nUno, nDos, nTres) {
  var nUno = parseInt(prompt("Ingresar el primer número"));
  var nDos = parseInt(prompt("Ingresar el segundo número"));
  var nTres = parseInt(prompt("Ingresar el tercer número"));
  if (nUno > nDos && nUno > nTres) {
    console.log(nUno);
  } else if (nDos > nUno && nDos > nTres) {
    console.log(nDos);
  } else {
    console.log(nTres);
  }
});

const Ejcuatro = document.querySelector("#EjCuatro");

EjCuatro.addEventListener("click", function com(maximoUno, maximoDos) {
  var i;
  var listaUno = new Array(3);

  for (i = 0; i <= 2; i++) {
    listaUno[i] = parseInt(prompt("Introduzca numero para la lista Uno "));
  }

  var i;
  var listaDos = new Array(3);

  for (i = 0; i <= 2; i++) {
    listaDos[i] = parseInt(prompt("Introduzca un numero para la lista dos"));
  }
  var listaTres = listaUno.concat(listaDos);
  console.log(listaTres);

  listaTres.forEach((indice, elementos) => {
    console.log(
      "El numero mayo de las dos listas es: " +
        Math.max.apply(elementos, listaTres)
    );
  });
});

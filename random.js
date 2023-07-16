const p = document.querySelector(".p");
const numero = document.querySelector("#input");
const btn = document.querySelector("#boton");

let salida = "";

const mql = matchMedia("(max-width: 900px)");
const mql2 = matchMedia("(min-width: 900px)");

const caja = document.querySelector(".divv");
//Con esto lograremos que la pagina no se vea mal en un celular
mql.addEventListener("change", () => {
  if (mql.matches) {
    caja.style.width = "100%";
    caja.style.height = "60%";
  }
  else if (mql2.matches) {
    caja.style.width = "40%";
    caja.style.height = "50%";
  }
})

//Abrimos la escuca al evento click
btn.addEventListener("click", (e) => {
  e.preventDefault()
  //Generamos un numero random a cada click del 1 al 10
  //por defecto se realiza de 0 a 9 por lo que sumamos 1 para que sea de 1 a 10
  let num = Math.floor(Math.random() * 10) + 1; 

  //Segun el numero dado, al mensaje de respuesta se le dara un estilo y un breve texto 
  //respecto a si el numero a sido adivinado o no
  if (numero.value.length == 0) {
    salida = "Selecciona un número...";
    p.style.color = "#3367";
  } else if (numero.value >= 11){
    salida = "Error el número ingresado es mayor a Diez";
    p.style.color = "#3367";
  } else if (numero.value != num) {
    salida = "No adivinaste el número es: " + "<br>" + num;
    p.style.color = "#f00";
  } else if (numero.value == num){
    salida = "Adivinaste el número es: "+"<br>" + num;
    p.style.color = "#393";
  }
  numero.focus();
  p.innerHTML = salida;
})

// No se le agrega el e.preventDefault(), Porque el mismo boton reinicia la pagina
// Y resetea el input y el mensaje de respuesta
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  salida = "Resultado...";
  p.style.color = "#3367";
  p.innerHTML = salida;
  numero.focus()
})



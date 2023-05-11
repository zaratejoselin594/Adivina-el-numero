const p = document.querySelector(".p");
const numero = document.querySelector("#input");
const btn = document.querySelector("#boton");
let salida = "";


btn.addEventListener("click", (e) => {
  e.preventDefault()
  let num = Math.random() * 10;
  num = Math.round(num);
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

const reset = document.querySelector("#reset");
reset.addEventListener("click", (e) => {
  salida = "Resultado...";
  p.style.color = "#3367";
  p.innerHTML = salida;
  numero.focus()
})



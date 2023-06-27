function agregarNumero(numero) {
  var display = document.getElementById("display");
  var valorActual = display.value;
  valorActual += numero;
  display.value = valorActual;
}

function borrar() {
  var display = document.getElementById("display");
  display.value = "";
}

function operar(operador) {
  var display = document.getElementById("display");
  var valorActual = display.value;

  if (
    valorActual.includes("+") ||
    valorActual.includes("-") ||
    valorActual.includes("*") ||
    valorActual.includes("/")
  ) {
    calcular();
  }

  valorActual += operador;
  display.value = valorActual;
}

function calcular() {
  var display = document.getElementById("display");
  var valorActual = display.value;
  var resultado = eval(valorActual);
  display.value = resultado;
}

// Obtener todos los botones de la calculadora
var buttons = document.getElementsByTagName("button");

// Recorrer los botones y agregar el evento onclick a cada uno
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function (event) {
    // Obtener el valor del botón clickeado
    var buttonValue = event.target.innerHTML;

    // Verificar si es un número o un operador
    if (parseInt(buttonValue) || buttonValue === "0") {
      agregarNumero(buttonValue);
    } else if (buttonValue === "C") {
      borrar();
    } else if (buttonValue === "=") {
      calcular();
    } else {
      operar(buttonValue);
    }
  };
}

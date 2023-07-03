var historial = []; // Array para almacenar el historial de operaciones

function retroceder() {
  var display = document.getElementById("display");
  var valorActual = display.value;

  // Guardar el estado actual en el historial
  historial.push(valorActual);

  // Retroceder al estado anterior si hay elementos en el historial
  if (historial.length > 1) {
    historial.pop();
    valorActual = historial[historial.length - 1];
    display.value = valorActual;
  }
}

function avanzar() {
  var display = document.getElementById("display");
  var valorActual = display.value;

  // Avanzar al siguiente estado si hay elementos en el historial
  if (historial.length > 1) {
    historial.shift();
    valorActual = historial[0];
    display.value = valorActual;
  }
}

function agregarNumero(numero) {
  var display = document.getElementById("display");
  var valorActual = display.value;
  valorActual += numero;
  display.value = valorActual;

  // Agregar salida al elemento <div>
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "Número agregado: " + numero + "<br>";
}

function borrar() {
  var display = document.getElementById("display");
  var output = document.getElementById("output"); // Elemento para mostrar los mensajes de entrada y salida
  display.value = "";
  output.innerHTML = ""; // Borrar los mensajes de entrada y salida

  // Agregar salida al elemento <div>
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "Contenido borrado<br>";
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

  // Agregar salida al elemento <div>
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "Operador agregado: " + operador + "<br>";
}

function calcular() {
  var display = document.getElementById("display");
  var valorActual = display.value;
  var resultado = eval(valorActual);
  display.value = resultado;

  // Agregar salida al elemento <div>
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "Cálculo realizado. Resultado: " + resultado + "<br>";
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
document.getElementById("clearButton").onclick = function () {
  borrar();
};
function cambiarModo() {
  var body = document.body;
  var button = document.getElementById("modeButton");

  // Verificar el estado actual del modo de color
  var isDarkMode = body.classList.contains("dark-mode");

  // Si está en modo oscuro, cambiar a modo claro
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    button.innerHTML = "Modo oscuro";
  } else {
    // Si está en modo claro, cambiar a modo oscuro
    body.classList.add("dark-mode");
    button.innerHTML = "Modo claro";
  }
}

/*Particulas*/
particlesJS({
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ea0000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

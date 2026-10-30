const preguntas = [
  {
    texto: "1. ¿En qué localidad y fecha nació Enrique Canadell Quintana?",
    opciones: [
      "A) Olot, Gerona, el 29 de junio de 1890.",
      "B) Barcelona, el 17 de agosto de 1890.",
      "C) Lérida, el 20 de diciembre de 1893.",
      "D) Madrid, el 1 de octubre de 1895."
    ],
    correcta: 0
  },
  {
    texto: "2. ¿Cuál fue el orden correcto de su formación religiosa?",
    opciones: [
      "A) Fue ordenado sacerdote, ingresó a los Escolapios y después profesó.",
      "B) Ingresó a los Escolapios, realizó su primera profesión y luego la profesión solemne.",
      "C) Realizó la profesión solemne antes de ingresar a los Escolapios.",
      "D) Ingresó a los Escolapios después de ser beatificado."
    ],
    correcta: 1
  },
  {
    texto: "3. ¿Cuándo y dónde fue ordenado sacerdote?",
    opciones: [
      "A) El 18 de agosto de 1907, en Olot.",
      "B) El 29 de junio de 1912, en Barcelona.",
      "C) El 20 de diciembre de 1913, en Lérida.",
      "D) El 1 de octubre de 1995, en Roma."
    ],
    correcta: 2
  },
  {
    texto: "4. ¿Qué actividades desarrolló principalmente durante su ministerio?",
    opciones: [
      "A) Se dedicó exclusivamente a la administración de colegios.",
      "B) Trabajó como militar y luego como sacerdote.",
      "C) Se dedicó únicamente a escribir libros de historia.",
      "D) Desarrolló tareas educativas y sacerdotales, predicó el Evangelio y promovió la devoción eucarística."
    ],
    correcta: 3
  },
  {
    texto: "5. ¿En qué colegios de Barcelona desarrolló su labor?",
    opciones: [
      "A) En el Colegio de San José y en el Colegio de Lérida.",
      "B) En el Colegio de Nuestra Señora de las Escuelas Pías y en el Colegio de San Antonio.",
      "C) Únicamente en el Colegio de San Antonio entre 1920 y 1925.",
      "D) En colegios de Madrid y Roma."
    ],
    correcta: 1
  },
  {
    texto: "6. ¿Por qué decidió abandonar la casa de la familia amiga que lo había refugiado en 1936?",
    opciones: [
      "A) Porque quería regresar a Barcelona para continuar sus clases.",
      "B) Porque había recibido una invitación para viajar a Roma.",
      "C) Para evitar poner en peligro a la familia que lo estaba ayudando.",
      "D) Porque había terminado su misión religiosa."
    ],
    correcta: 2
  },
  {
    texto: "7. ¿Qué recorrido realizó durante su huida en 1936?",
    opciones: [
      "A) Olot, Madrid, Roma y Barcelona.",
      "B) Lérida, Madrid y Olot.",
      "C) Barcelona, Roma y Gerona.",
      "D) Barcelona, la casa de una familia amiga, Olot y finalmente las cercanías de Castellfollit de la Roca."
    ],
    correcta: 3
  },
  {
    texto: "8. ¿Qué ocurrió la noche del 17 de agosto de 1936?",
    opciones: [
      "A) Fue detenido en Olot y posteriormente asesinado cerca de Castellfollit de la Roca.",
      "B) Fue ordenado sacerdote en Lérida.",
      "C) Fue trasladado a Roma para continuar sus estudios.",
      "D) Fue nombrado rector de un colegio."
    ],
    correcta: 0
  },
  {
    texto: "9. ¿Cuándo fue beatificado Enrique Canadell Quintana y quién lo beatificó?",
    opciones: [
      "A) El 20 de diciembre de 1913, por un obispo de Lérida.",
      "B) El 1 de octubre de 1995, por el papa San Juan Pablo II.",
      "C) El 17 de agosto de 1936, por sus compañeros escolapios.",
      "D) El 29 de junio de 1890, por el papa Pío XII."
    ],
    correcta: 1
  },
  {
    texto: "10. ¿Qué valores representa su legado?",
    opciones: [
      "A) La riqueza, el poder y el reconocimiento público.",
      "B) La política, el comercio y la expansión territorial.",
      "C) La educación, la fe, el servicio y el testimonio religioso.",
      "D) La competencia deportiva y el éxito económico."
    ],
    correcta: 2
  }
];

let correctas = 0;
let respondidas = 0;
let respuestasUsuario = [];

const contenedor = document.getElementById("preguntas");
const contador = document.getElementById("respondidas");
const botonResultado = document.getElementById("resultado");

function mostrarPreguntas() {
  preguntas.forEach(function(pregunta, i) {
    const bloque = document.createElement("div");
    const titulo = document.createElement("h3");

    bloque.className = "pregunta";
    titulo.textContent = pregunta.texto;
    bloque.appendChild(titulo);

    pregunta.opciones.forEach(function(opcion, j) {
      const boton = document.createElement("button");

      boton.textContent = opcion;
      boton.className = "opcion";
      boton.type = "button";

      boton.addEventListener("click", function() {
        corregirRespuesta(i, j, bloque);
      });

      bloque.appendChild(boton);
    });

    const devolucion = document.createElement("p");
    devolucion.id = "devolucion" + i;
    devolucion.className = "devolucion";
    bloque.appendChild(devolucion);

    contenedor.appendChild(bloque);
  });
}

function corregirRespuesta(i, seleccion, bloque) {
  if (respuestasUsuario[i] !== undefined) {
    return;
  }

  respuestasUsuario[i] = seleccion;
  respondidas++;

  const botones = bloque.querySelectorAll("button");
  const devolucion = document.getElementById("devolucion" + i);

  botones[preguntas[i].correcta].classList.add("correcta");

  if (seleccion === preguntas[i].correcta) {
    correctas++;
    devolucion.textContent = "¡Correcto!";
    devolucion.style.color = "green";
  } else {
    botones[seleccion].classList.add("incorrecta");

    devolucion.textContent =
      "Incorrecto. La respuesta correcta es: " +
      preguntas[i].opciones[preguntas[i].correcta];

    devolucion.style.color = "red";
  }

  botones.forEach(function(boton) {
    boton.disabled = true;
  });

  contador.textContent = respondidas;

  if (respondidas === 10) {
    botonResultado.disabled = false;
  }
}

botonResultado.addEventListener("click", function() {
  const errores = 10 - correctas;

  document.getElementById("nota").textContent =
    "Respuestas correctas: " + correctas + "/10. Errores: " + errores;

  const titulo = document.getElementById("tituloResultado");
  const mensaje = document.getElementById("mensajeResultado");

  if (errores >= 6) {
    titulo.textContent = "¡A repasar!";
    mensaje.textContent =
      "Releé la página y volvé a intentarlo.";
  } else if (correctas >= 7 && correctas <= 8) {
    titulo.textContent = "¡Felicitaciones!";
    mensaje.textContent =
      "Muy bien. Repasá tus errores para aprender más.";
  } else if (correctas >= 9) {
    titulo.textContent = "¡Excelente!";
    mensaje.textContent =
      "¡Felicitaciones por tu resultado!";
  } else {
    titulo.textContent = "¡Buen intento!";
    mensaje.textContent =
      "Seguí practicando y repasá los errores.";
  }

  document.getElementById("final").classList.remove("oculto");
  botonResultado.disabled = true;
});

document.getElementById("reiniciar").addEventListener("click", function() {
  correctas = 0;
  respondidas = 0;
  respuestasUsuario = [];

  contenedor.innerHTML = "";
  contador.textContent = 0;
  botonResultado.disabled = true;

  document.getElementById("final").classList.add("oculto");

  mostrarPreguntas();
  window.scrollTo(0, 0);
});

mostrarPreguntas();

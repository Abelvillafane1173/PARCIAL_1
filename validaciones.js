function soloLetras(valor) {
  return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(valor);
}

function soloNumeros(valor) {
  return /^\d{8}$/.test(valor);
}

function esFechaValida(fecha) {
  const inputDate = new Date(fecha);
  const minDate = new Date('2006-12-31');
  return inputDate > minDate;
}

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarYPreguntar() {
  let ok = true;

  const apellido = document.getElementById("apellido").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const fecha = document.getElementById("fecha").value;
  const email = document.getElementById("email").value.trim();

  // Limpiar errores
  document.getElementById("errorApellido").innerText = "";
  document.getElementById("errorNombre").innerText = "";
  document.getElementById("errorDni").innerText = "";
  document.getElementById("errorFecha").innerText = "";
  document.getElementById("errorEmail").innerText = "";

  if (!soloLetras(apellido)) {
    document.getElementById("errorApellido").innerText = "Solo letras permitidas.";
    ok = false;
  }

  if (!soloLetras(nombre)) {
    document.getElementById("errorNombre").innerText = "Solo letras permitidas.";
    ok = false;
  }

  if (!soloNumeros(dni)) {
    document.getElementById("errorDni").innerText = "DNI debe tener 8 dígitos.";
    ok = false;
  }

  if (!esFechaValida(fecha)) {
    document.getElementById("errorFecha").innerText = "Fecha debe ser posterior al año 2006.";
    ok = false;
  }

  if (!esEmailValido(email)) {
    document.getElementById("errorEmail").innerText = "Correo electrónico inválido.";
    ok = false;
  }

  if (ok) {
    const respuestas = [];
    respuestas.push(prompt("¿Cuál es tu nacionalidad?"));
    respuestas.push(prompt("¿Cuál es tu color favorito?"));
    respuestas.push(prompt("¿Cuál es el nombre de tu mascota?"));

    const contenedor = document.getElementById("respuestas");
    contenedor.innerHTML = `
      <h3>Respuestas del usuario:</h3>
      <ul>
        <li><strong>Nacionalidad:</strong> ${respuestas[0]}</li>
        <li><strong>Color favorito:</strong> ${respuestas[1]}</li>
        <li><strong>Nombre de mascota:</strong> ${respuestas[2]}</li>
      </ul>
    `;
  }
}

document.addEventListener("DOMContentLoaded", main);

function main() {
<<<<<<< HEAD
  enviaForm();
=======
  addListenerForm();
}

function addListenerForm() {
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    enviaForm(e.currentTarget);
  });
>>>>>>> 7ac221d7726a4d78d5c7532fffe78e9b88e83710
}

function enviaForm(formElement) {
  let formData = new FormData(formElement);
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = JSON.parse(this.responseText);
      showMessage(respuesta);
    }
  };
  xhttp.open("POST", "login.php", true);
  xhttp.send(formData);
}

function showMessage(message) {
if (message.mensaje == 1) {
  window.setTimeout(function () {
    window.location.href = "listar_eventos.html";
    }, 1000);
}else {
  let lead = document.getElementsByClassName("lead");
  lead[0].innerHTML = "-- login invalido --";
  lead[0].setAttribute("class", "lead text-danger");
}
}
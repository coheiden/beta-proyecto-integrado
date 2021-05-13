document.addEventListener("DOMContentLoaded", main);

function main() {
  addListenerForm();
}

function addListenerForm() {
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    enviaForm(e.currentTarget);
  });
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
  //console.log(formData);
}

function showMessage(message) {
  //console.log(message)
  //div = document.getElementById("mensaje");
  //div.innerHTML = "Formulario " + message.mensaje;
  console.log(message.mensaje);
  

if (message.mensaje == 1) {
  window.setTimeout(function () {
    window.location.href = "listar_eventos.html";
    }, 1000);
}else {
  console.log("login invalido");
  let lead = document.getElementsByClassName("lead");
  console.log(lead);
  
  lead[0].innerHTML = "-- login invalido --";
  lead[0].setAttribute("class", "lead text-danger");
}

}
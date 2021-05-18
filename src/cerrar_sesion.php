<?php


// PAGINA QUE CIERRA SESION CUANDO SE CLICKA EL BOTON DEL NAVBAR 
// Redirige al login ya que necesitas volver a iniciar sesion para usar la web

session_start();
session_destroy();

header("Location:../public/login.html");



?>
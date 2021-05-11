<?php

include_once "autoload.php";



$admin = new administrador;
?>


<!DOCTYPE html>
<html lang="es">
<head>
  <title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="../public/css/custom.css">
 
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

   
</head>
<body class=".bg-primary.bg-gradient">
    
<div class="container">
  <main>
    <div class="py-5 text-center">

	  <span class="logo logo-1">EVENT</span> <span class="logo logo-2">MAKER</span>


      
      <p class="lead">Bienvenido</p>
    </div>


    <container id="box">
    <form action="" method="post" id="formulario">


        <label for="fname">Nombre Usuario:</label><br>
        <input class="border border-primary rounded font-monospace shadow"  type="text"  id="input_login" name="user" value="user">
        <br>
        <br>
        <label for="Contraseña">Contraseña:</label>
        <br>
        <input class="border border-primary rounded font-monospace shadow" type="password" id="input_login" name="password" value="password">
        <br>
        <br>
    <input class ="btn btn-outline-success border-2 shadow btn-lg" type="submit" id="saveForm" value="Login">

  </form> 

</container>


  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
 
    <p class="mb-1">&copy; 2017–2021 Event Maker</p>
  </footer>
</div>

 </body>
</html>

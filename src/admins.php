<?php

include_once "autoload.php";


$listador = new listador();
echo json_encode($listador->listarAdmins($_GET["pagina"]));







?>
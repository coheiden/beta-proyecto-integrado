<?php

include_once "autoload.php";


$eventos = new listador();
echo json_encode($eventos->listarAsistentes($_GET["pagina"]));







?>
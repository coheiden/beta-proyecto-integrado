<?php

include_once "autoload.php";


$listador = new listador();
echo json_encode($listador->listarEventos($_GET["limite"]));







?>
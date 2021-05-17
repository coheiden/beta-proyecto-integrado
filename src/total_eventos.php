<?php

include_once "autoload.php";

$listador = new listador;

$total = $listador->totalEventos();

echo json_encode($total);







?>
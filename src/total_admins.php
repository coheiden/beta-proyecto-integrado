<?php

include_once "autoload.php";

$listador = new listador;

$total = $listador->totalAdmins();

echo json_encode($total);







?>
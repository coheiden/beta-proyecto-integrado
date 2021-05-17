<?php

include_once "autoload.php";

$listador = new listador;

$total = $listador->totalAsistentes();

echo json_encode($total);







?>
<?php

include_once "autoload.php";


$asistentes = new listador();

echo json_encode($asistentes->listarTodosAsistentes());







?>
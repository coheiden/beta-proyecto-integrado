<?php

include_once "autoload.php";

session_start();


echo json_encode(["usuario" => sesion::usuario()]);







?>
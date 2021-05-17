<?php

// UNA CLASE CON FUNCIONES STATICAS QUE COMPRUEBA LA SESION Y EL NOMBRE DE USUARIO
// Estas clases se llaman en funciones para compribar la sesion y en otras para mostrar el usuario 
class sesion{
    
    public static function comprobarSesion(){

        if (isset($_SESSION["user_id"])) {

            return true;

        }else{

            return false;

        }

    }


    public static function usuario(){

        if (isset($_SESSION["user_name"])) {

            return $_SESSION["user_name"];

        }else{

            return false;

        }

    }
}
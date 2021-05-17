<?php

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
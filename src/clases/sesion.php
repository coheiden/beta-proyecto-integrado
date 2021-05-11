<?php

class sesion extends conexion{
    
    public static function comprobarSesion(){

        if (isset($_SESSION["user_id"])) {

            return true;

        }else{

            return false;

        }

    }
}
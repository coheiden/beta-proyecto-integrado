<?php

class administrador extends conexion
{


    public function obtenerInfo($usuario){

        $sql = "SELECT * from administrador where nombre_usuario = '$usuario'";
        $result = $this->connect()->query($sql);

        $array_info = $result->fetch_all(MYSQLI_ASSOC);

        return $array_info;

    }

    public function comprobarDatosPost(){

        if (!empty($_POST)) {
       
        $array_info = $this->obtenerInfo($_POST["nombre_usuario"]);

            foreach ($array_info as $key => $value) {
                
                    if ($_POST["contraseña"] == $array_info[$key]["contraseña"]){

                        session_start();
                    
                        $_SESSION["nombre_usuario"] = $_POST["nombre_usuario"];
                        $_SESSION["instante"] = time();

                        echo "<br><br>Acceso Correcto";


                    }else{

                    echo "<br><br>Contraseña incorrecta";

                    }
            }
        }
    }
}

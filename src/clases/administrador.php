<?php

class administrador extends conexion
{

    public function obtenerInfo($usuario)
    {

<<<<<<< HEAD:src/clases/administrador.php
    public function obtenerInfo($usuario){

        $sql = "SELECT * from administrador where nombre_usuario = '$usuario'";
        $result = $this->connect()->query($sql);

        $array_info = $result->fetch_all(MYSQLI_ASSOC);

        return $array_info;
=======
        $sql = 'SELECT * from administrador where nombre_usuario = "' . $usuario . '"';
        //echo $sql;
        $result = $this->connect()->query($sql);
        if ($result) {
            $infoUser = $result->fetch_assoc();
            return $infoUser;
        };
>>>>>>> 9e6908283ed2f3190b1dd5c3415492948333ba94:clases/administrador.php

    }

    public function comprobarDatosPost($datosForm)
    {
        $user = $datosForm["user"];
        $password = $datosForm["password"];

<<<<<<< HEAD:src/clases/administrador.php
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
=======
        $infoUser = $this->obtenerInfo($user);

        if (!$infoUser) { // si el usuario no existe
            return false;
        }

        if (password_verify($password, $infoUser["contraseña"])) {

            session_start();
            $_SESSION["user_id"] = $infoUser["id_administrador"];
            return true;

        } else {
            return false;

>>>>>>> 9e6908283ed2f3190b1dd5c3415492948333ba94:clases/administrador.php
        }

    }
}

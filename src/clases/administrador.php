<?php

class administrador extends conexion
{

    public function obtenerInfo($usuario)
    {

<<<<<<< HEAD

=======
>>>>>>> e95a254e2d3e425ce5f2c12762872e5a9f961a3d
        $sql = 'SELECT * from administrador where nombre_usuario = "' . $usuario . '"';
        //echo $sql;
        $result = $this->connect()->query($sql);
        if ($result) {
            $infoUser = $result->fetch_assoc();
            return $infoUser;
        };

    }

    public function comprobarDatosPost($datosForm)
    {
        $user = $datosForm["user"];
        $password = $datosForm["password"];

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
<<<<<<< HEAD
=======

>>>>>>> e95a254e2d3e425ce5f2c12762872e5a9f961a3d
        }

    }
}

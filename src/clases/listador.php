<?php


class listador extends conexion
{



    public function listarAdmins(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT * from administrador';
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAdmins = $result->fetch_assoc();
                return $listadoAdmins;
            };
            
        }else{

            echo "sesion no iniciada ";

        }
    }

    public function listarEventos(){

        // if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_acto, id_administrador, nombre,fecha_hora  from acto';
            $result = $this->connect()->query($sql);
            // if ($result) {
            $listadoEventos = $result->fetch_all();
            return $listadoEventos;
            // };
            
        // }else{

            echo $_SESSION["user_id"];
            echo "sesion no iniciada <br>";
        // }

    }

    public function listarAsistentes(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_asistente, dni, nombre, correo from asistente';
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAsistentes = $result->fetch_assoc();
                return $listadoAsistentes;
            };
            
        }else{

            echo "sesion no iniciada";

        }
    }

}
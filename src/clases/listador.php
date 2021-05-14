<?php


class listador extends conexion
{



    public function listarAdmins(){

        // if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_administrador, nombre_usuario, correo from administrador';
            $result = $this->connect()->query($sql);
            // if ($result) {
                $listadoAdmins = $result->fetch_all();
                return $listadoAdmins;
            }
            
        // }else{

        // }
    

    public function listarEventos(){

        // if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_acto, id_administrador, nombre,fecha_hora  from acto';
            $result = $this->connect()->query($sql);
            // if ($result) {
            $listadoEventos = $result->fetch_all();
            return $listadoEventos;
        //     };
            
        // }else{

        // }

    }

    public function listarAsistentes(){

        // if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_asistente, dni, nombre, correo from asistente';
            $result = $this->connect()->query($sql);
            // if ($result) {
                $listadoAsistentes = $result->fetch_all();

                return $listadoAsistentes;
            // };
            
        // }else{

        //     echo "sesion no iniciada";

        // }
    }

}
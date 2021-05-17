<?php
session_start();

class listador extends conexion
{



    public function listarAdmins($pagina){

        if (sesion::comprobarSesion() == true) {

            $offset = $pagina * 10;

            $sql = "SELECT id_administrador, nombre_usuario, correo from administrador LIMIT $offset, 10";
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAdmins = $result->fetch_all(MYSQLI_ASSOC);
                return $listadoAdmins;
            }
            
        }else{

            return http_response_code(403);

<<<<<<< HEAD
        // }
    
=======
        }
    }
>>>>>>> 53127b3f1476090687c23c9f5c85946c7b1ec9f4

    public function listarEventos($pagina){

        if (sesion::comprobarSesion() == true) {

            $offset = $pagina * 10;

            $sql = "SELECT id_acto, id_administrador, nombre,fecha_hora  from acto LIMIT $offset, 10";

            $result = $this->connect()->query($sql);
            if ($result) {
                
            $listadoEventos = $result->fetch_all(MYSQLI_ASSOC);
            return $listadoEventos;
            };
            
        }else{

            return http_response_code(403);

        }

    }

    public function listarAsistentes($pagina){

        if (sesion::comprobarSesion() == true) {
            
            $offset = $pagina * 10;


            $sql = "SELECT id_asistente, dni, nombre, correo from asistente LIMIT $offset, 10";
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAsistentes = $result->fetch_all(MYSQLI_ASSOC);

                return $listadoAsistentes;
            };
            
        }else{

            return http_response_code(403);

        }
    }


    public function totalEventos(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT COUNT(id_acto) from acto';
            $result = $this->connect()->query($sql);
            if ($result) {

                $listadoAsistentes = $result->fetch_assoc();
                return $listadoAsistentes;
            };
            
        }else{

            return http_response_code(403);

        }
    }

    public function totalAdmins(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT COUNT(id_administrador) from administrador';
            $result = $this->connect()->query($sql);
            if ($result) {

                $listadoAsistentes = $result->fetch_assoc();
                return $listadoAsistentes;
            };
            
        }else{

            return http_response_code(403);

        }
    }

    public function totalAsistentes(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT COUNT(id_asistente) from asistente';
            $result = $this->connect()->query($sql);
            if ($result) {

                $listadoAsistentes = $result->fetch_assoc();
                return $listadoAsistentes;
            };
            
        }else{

            return http_response_code(403);

        }
    }

}
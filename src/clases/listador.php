<?php
session_start();

class listador extends conexion
{



    public function listarAdmins(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_administrador, nombre_usuario, correo from administrador';
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAdmins = $result->fetch_all(MYSQLI_ASSOC);
                return $listadoAdmins;
            }
            
        }else{

            header("location:../login.html");

<<<<<<< HEAD
        // }
    
=======
        }
    }
>>>>>>> 53127b3f1476090687c23c9f5c85946c7b1ec9f4

    public function listarEventos(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_acto, id_administrador, nombre,fecha_hora  from acto';
            $result = $this->connect()->query($sql);
            if ($result) {
                
            $listadoEventos = $result->fetch_all(MYSQLI_ASSOC);
            return $listadoEventos;
            };
            
        }else{

            return http_response_code(403);

        }

    }

    public function listarAsistentes(){

        if (sesion::comprobarSesion() == true) {

            $sql = 'SELECT id_asistente, dni, nombre, correo from asistente';
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAsistentes = $result->fetch_all(MYSQLI_ASSOC);

                return $listadoAsistentes;
            };
            
        }else{

            return http_response_code(403);

        }
    }

}
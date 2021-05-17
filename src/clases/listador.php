<?php
session_start();

class listador extends conexion
{


// ESTAS FUNCIONES SON LAS QUE SE USAN PARA ENVIAR LA INFORMACION POR PETICION ASINCRONA AL JS
// CADA UNA RETORNA LA INFORMACION DE CADA UNA DE LAS TABLAS SELECCIONADAS


    public function listarAdmins($pagina){

        // Todas comprueban las sesion, en caso de que no exista sesion retorna un error que el js entiende y redirige al login para que genere las mismas

        if (sesion::comprobarSesion() == true) {

            $offset = $pagina * 10;

            // El offset se usa para el paginador, de forma que retorna solo los datos que quiero para cada pagina de la tabla

            $sql = "SELECT id_administrador, nombre_usuario, correo from administrador LIMIT $offset, 10";
            $result = $this->connect()->query($sql);
            if ($result) {
                $listadoAdmins = $result->fetch_all(MYSQLI_ASSOC);
                return $listadoAdmins;
            };
            
        }else{

            return http_response_code(403);

        }
    }

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


// ESTAS 3 FUNCIONES DEVUELVEN LA CANTIDAD DE ELEMENTOS QUE HAY EN CADA TABLA DE LA BBDD 
// Estas funciones al igual que las anteriores se llaman para realizar peticiones asincronas en js 

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
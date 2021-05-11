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

            header("Location:./prueba.php");
        }
    }

}
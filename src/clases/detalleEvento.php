<?php

class administrador extends conexion
{

   public function DetalleEvento($id){


    if (sesion::comprobarSesion() == true) {

        $sql = 'SELECT * from acto where id_acto = "' . $id . '"';
        
        $result = $this->connect()->query($sql);
        if ($result) {
            $infoEvent = $result->fetch_assoc();
            return $infoEvent;
        };

   }else{

        return http_response_code(403);

    }      
}

<?php

class administrador extends conexion
{

   public function datosDetalle($id){

    $sql = 'SELECT * from asistente where id_asistente = "' . $id . '"';
    //echo $sql;
    $result = $this->connect()->query($sql);
    if ($result) {
        $infoUser = $result->fetch_assoc();
        return $infoUser;
    };

   }
}

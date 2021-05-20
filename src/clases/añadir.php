<?php

class añadir extends conexion
{

    public function añadirEvento($infoAdmin){
        

        if (!empty($_POST)) {

            $idAdmin = $infoAdmin["id_administrador"];
            $nombreEvento = $_POST["nombre"];
            $descripcion = $_POST["descripcion"];
            $direccion = $_POST["direccion"];
            $fecha_hora = $_POST["fecha_hora"];
            $fecha_hora = new Datetime($fecha_hora);
            $fecha_hora = $fecha_hora->format('Y-m-d H:i:s');
            $plazas_totales = $_POST["plazas_totales"];
            $plazas_ocupadas = 0;



            $sql = "INSERT INTO acto(id_administrador, nombre, descripcion, direccion, fecha_hora, plazas_ocupadas, plazas_totales) VALUES ($idAdmin, '$nombreEvento', '$descripcion', '$direccion', '$fecha_hora', $plazas_ocupadas, $plazas_totales)";
            $result = $this->connect()->query($sql);

            return $result;

        }

    }

    public function añadirAsistente(){

        if (!empty($_POST)) {

            $dni = $_POST["dni"];
            $fecha_hora_registro = date("Y-m-d h:i:s");
            $codigo_postal = $_POST["codigo_postal"];
            $nombreAsistente = $_POST["nombre"];
            $apellidos = $_POST["apellidos"];
            $correo = $_POST["correo"];

            $sql = "INSERT INTO asistente(dni,fecha_hora_registro, codigo_postal, nombre, apellidos, correo) VALUES ('$dni', '$fecha_hora_registro', $codigo_postal, '$nombreAsistente', '$apellidos', '$correo')";
            var_dump($sql);
            $result = $this->connect()->query($sql);
           
        }

    }

    public function añadirAdmin(){



        if (!empty($_POST)) {

            $nombre = $_POST["nombre"];
            $contraseña = $_POST["contraseña"];
            $contraseñaHash = password_hash($contraseña, PASSWORD_BCRYPT);
            $correo = $_POST["correo"];


            $sql = "INSERT INTO administrador(nombre_usuario, contraseña, correo) VALUES ('$nombre', '$contraseñaHash', '$correo')";
            $result = $this->connect()->query($sql);
        }

    }

    public function inscribir($id){
        

            $sql = "UPDATE acto set plazas_ocupadas = (plazas_ocupadas+1) , plazas_totales = (plazas_totales-1) where id_acto = $id";

            $result = $this->connect()->query($sql);

            return $result;
        


    }



}

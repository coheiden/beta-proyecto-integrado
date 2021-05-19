<?php

class añadir extends conexion
{

    public function añadirEvento($infoAdmin){
        
        // var_dump($_POST);

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

            // var_dump($fecha_hora);


            $sql = "INSERT INTO acto(id_administrador, nombre, descripcion, direccion, fecha_hora, plazas_ocupadas, plazas_totales) VALUES ($idAdmin, '$nombreEvento', '$descripcion', '$direccion', '$fecha_hora', $plazas_ocupadas, $plazas_totales)";
            $result = $this->connect()->query($sql);

        }

    }

    public function añadirAsistente(){

        if (!empty($_POST)) {
            var_dump($_POST);
            $dni = $_POST["dni"];
            $fecha_hora_registro = date("Y-m-d h:i:s");
            $codigo_postal = $_POST["codigo_postal"];
            $nombreAsistente = $_POST["nombre"];
            $apellidos = $_POST["apellidos"];
            $correo = $_POST["correo"];


            $stmt = $this->conn->prepare("INSERT INTO asistente(dni, fecha_hora_registro, codigo_postal, nombre, apellidos, correo) VALUES (?,?,?,?,?,?)");
            $stmt->bind_param("ssisss");
            $result = $stmt->execute();
            $stmt->close();
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



}

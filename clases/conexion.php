<?php
abstract class conexion
{
    private $servername;
    private $username;
    private $password;
    private $db;

    public function __construct()
    {
        $linea = $this->import("conf.csv");
        $this->servername = $linea[0];
        $this->username = $linea[1];
        $this->password = "$linea[2]";
        $this->db = $linea[3]; 

    }
    private function import($file)
    {
        $myfile = fopen($file, "r") or die("Unable to open file!");
        $line = fgetcsv($myfile);
        fclose($myfile);
        return $line;
    }


    public function connect()
    {
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->db);
        return $conn;
    }
}

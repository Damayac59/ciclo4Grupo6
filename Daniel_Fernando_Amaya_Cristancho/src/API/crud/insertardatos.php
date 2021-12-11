<?php	
    header('Acces-Control-Allow-Origin: *');
    header('Acces-Control-Allow-Headers: Origin, X-Requested-Width, Content-Type, Accept');

    $json =file_get_contents('php://input');

    $params = json_decode($json);

    require("../base/conexion.php");

    $conexion = conexion();

    
?>
<?php
//acceso para todos los archivos que vienen por url ya sea por get o post
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../base/conexion.php");

$conexion =conexion();
mysqli_query($conexion,"DELETE FROM novedad WHERE codigo_novedad = $_GET[codigo_novedad]");

class Result{}
//con $ se crea variables
//aqui estamos 
$response = new Result();

$response = new Result();
$response -> resultado='OK';
$response -> mensaje='Se elimino con exito la novedad';
  
header('Content-Type: application/json');

echo json_encode($response);
?>
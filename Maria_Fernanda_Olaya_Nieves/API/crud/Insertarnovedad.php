<?php
//acceso para todos los archivos que vienen por url ya sea por get o post
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//header('Access-Control-Allow-Methods: POST')

if($_SERVER['REQUEST_METHOD']==='POST'){

//todo el contenido que entra y lo guarde en json pero vinen comprimidos
$json =file_get_contents('php://input');//recibe json de angular
//decodifique el archivo json aqui los decomprimo
$params = json_decode($json);
//cargo la bd
require("../base/conexion.php");
//llamo la funcion conexion que esta dentro de la carpeta conexion

$conexion =conexion();

mysqli_query($conexion, "INSERT INTO novedad (
    nombre_novedad, 
    descripcion_novedad) VALUES (
        '$params->nombre_novedad',
        '$params->descripcion_novedad')");

class Result{}
//con $ se crea variables
//aqui estamos 
$response = new Result();
$response -> resultado='OK';
$response -> mensaje='Se registro con exito la novedad';
   
header('Content-Type: application/json');

echo json_encode($response);
}
?>
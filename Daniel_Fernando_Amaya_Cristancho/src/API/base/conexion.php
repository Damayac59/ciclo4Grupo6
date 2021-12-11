<?php
global $enlace;

function conexion(){
    $enlace =mysqli_connect('localhost','root','','apirestgrupo6');
    if(!enlace){
        echo "Error: no se puede conectar a la base de datos";
        exit;
    }
    return $enlace;


}

?>
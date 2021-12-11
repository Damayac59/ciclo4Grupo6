<?php
include('conexion.php')
$idusuario = $_POST['$idusuario'];
echo $idusuario;
$query = "SELECT * FROM usuarios";

$resultado = $db -> query($query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="1; url=http://localhost/Angularciclo4Grupo6/src/app/informe-empleados/informe-empleados.component.html">
    <title>Document</title>
</head>
<body>
    <?php
        if($resultado>0){
        ?>
            <script>
            alert("consulta exitosa");
            </script>
        <?php
        }else{
        ?>
            <script>
                alert("consulta fallida");
                </script>
        <?php
        }
        ?>
</body>
</html>
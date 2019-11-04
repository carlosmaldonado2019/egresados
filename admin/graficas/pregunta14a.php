<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre14_area = 1 then 'Físico, Matemáticas y Ciencias de la Tierra'
            when pre14_area = 2 then 'Biología y Química'
            when pre14_area = 3 then  'Medicina y Ciencias de la Salud'
            when pre14_area = 4 then 'Humanidades y Ciencias de la Conducta' 
            when pre14_area = 5 then 'Ciencias Sociales'
            when pre14_area = 6 then 'Biotecnología y Ciencias Agropecuarias'
            when pre14_area = 7 then 'Ingenierías'
            when pre14_area = 8 then 'Otro'
            end as nombre,count(*) num FROM `datos_posgrado`
            where pre14 = 1
            group by pre14_area
            ORDER by pre14_area;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);


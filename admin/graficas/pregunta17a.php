<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre17 = 1 then 'Usted mismo'
            when pre17 = 2 then 'Padres' 
            when pre17 = 3 then 'Beca'
            when pre17 = 4 then 'Esposo'
            when pre17 = 5 then 'Usted y su Pareja<'
            when pre17 = 6 then 'Otro'
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre17
            ORDER by pre17;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);
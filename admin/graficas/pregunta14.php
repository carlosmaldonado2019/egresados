<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre14 = 1 then 'Si'
            when pre14 = 0 then 'No' 
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre14
            ORDER by pre14;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

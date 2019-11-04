<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case when pre12 = 1 then 'En dos años' when pre12 = 2 then 'En tres años' when pre12 = 3 then 'En cuatro años' when pre12 = 4 then 'En cinco años' end as nombre,count(*) num FROM `datos_posgrado`
            group by pre12
            ORDER by pre12";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);
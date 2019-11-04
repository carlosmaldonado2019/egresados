<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre15 = 1 then 'Si'
            when pre15 = 0 then 'No' 
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre15
            ORDER by pre15;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);


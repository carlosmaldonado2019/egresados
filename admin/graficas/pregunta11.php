<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case when pre11 = 1 then 'si' when pre11 = 0 then 'no' end as nombre,count(*) num FROM `datos_posgrado`
          where pre6 = 0
            group by pre11
            ORDER by pre11;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);
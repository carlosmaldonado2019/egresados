<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre27_12 = 1 then 'Muy efectivos'
            when pre27_12 = 2 then 'Efectivos' 
            when pre27_12 = 3 then 'Poco efectivos'
            when pre27_12 = 4 then 'Deficientes'
            end as nombre,count(*) num FROM `ens_y_apren`
            group by pre27_12
            ORDER by pre27_12;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);
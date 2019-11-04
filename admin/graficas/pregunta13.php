<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre13 = 1 then 'Menos de setenta o setenta'
            when pre13 = 2 then 'De 71 a 75' 
            when pre13 = 3 then 'De 76 a 80'
            when pre13 = 4 then 'De 81 a 90'
            when pre13 = 5 then 'De 91 a 95'
            when pre13 = 6 then 'De 96 a 99' 
            when pre13 = 7 then '100'end as nombre,count(*) num FROM `datos_posgrado`
            group by pre13
            ORDER by pre13;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

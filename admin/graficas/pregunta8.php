<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT pre8,count(*) num FROM `datos_posgrado`
          where pre6 = 1
            group by pre8";
$num = 0 ;
$jsondata = array();
$result = mysqli_query($con, $sql);
while($row = $result->fetch_assoc()) {

    //array_push($jsondata,$row['pre8'],$row['num']);
    $jsondata[] = $row;
    //$jsondata[$num] = $row['pre8'];
    //$jsondata['num'] = $row['num'];
    //$jsondata=array($row['num']=>$row['pre8']);

    //$jsondata($num,$row);
}
echo json_encode($jsondata);
mysqli_close($con);
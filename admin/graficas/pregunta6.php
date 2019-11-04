<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */
$jsondata = array();
include "conex.php";
 $sql = "SELECT sum(case when pre6 = 1 then 1 else 0 end) si, sum(case when pre6 = 0 then 1 else 0 end) no
        FROM datos_posgrado";

$result = mysqli_query($con, $sql);
if( $row = mysqli_fetch_array($result)) {
    $jsondata['si'] = $row['si'];
    $jsondata['no'] = $row['no'];
    echo json_encode($jsondata);

}

mysqli_close($con);
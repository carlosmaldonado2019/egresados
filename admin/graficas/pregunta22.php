<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case when pre22 = 1 then 'Hacia la investigación'
                 when pre22 = 2 then 'Hacia la profesionalización'
                 when pre22 = 3 then 'Hacia el perfeccionamiento personal' end as nombre,count(*) num FROM `datos_posgrado`
            group by pre22
            ORDER by pre22;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 								<label><input type="radio" name="pre22" id="pre22" value="1" required>Hacia la investigación</label>
								<label><input type="radio" name="pre22" id="pre22" value="2" required>Hacia la profesionalización</label>
								<label><input type="radio" name="pre22" id="pre22" value="3" required>Hacia el perfeccionamiento personal</label>
 */
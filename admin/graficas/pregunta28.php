<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre28 = 1 then 'Estrechamente vinculados entre sí'
            when pre28 = 2 then 'Medianamente vinculados entre sí' 
            when pre28 = 3 then 'Poco efectivos'
            when pre28 = 4 then 'No tiene ninguna relación'
            end as nombre,count(*) num FROM `ens_y_apren`
            group by pre28
            ORDER by pre28;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 								<label><input type="radio" name="pre28" id="pre28" value="1" required>Estrechamente vinculados entre sí</label>
								<label><input type="radio" name="pre28" id="pre28" value="2" required>Medianamente vinculados entre sí</label>
								<label><input type="radio" name="pre28" id="pre28" value="3" required>Poco efectivos</label>
								<label><input type="radio" name="pre28" id="pre28" value="4" required>No tiene ninguna relación</label>
 */
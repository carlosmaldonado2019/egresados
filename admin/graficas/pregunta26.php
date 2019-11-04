<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre26 = 1 then 'Muy efectivos'
            when pre26 = 2 then 'Efectivos' 
            when pre26 = 3 then 'Poco efectivos'
            when pre26 = 4 then 'Deficientes'
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre26
            ORDER by pre26;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);


/*
 * 								<label><input type="radio" name="pre26" id="pre26" value="1" required>Muy efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="2" required>Efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="3" required>Poco efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="4" required>Deficientes</label>
 */
<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre29 = 1 then 'Completamente'
            when pre29 = 2 then 'En gran medida' 
            when pre29 = 3 then 'Solo una parte'
            when pre29 = 4 then 'Nada'
            end as nombre,count(*) num FROM `ens_y_apren`
            group by pre29
            ORDER by pre29;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 *
 * 								<label><input type="radio" name="pre29" id="pre29" value="1" required>Completamente</label>
								<label><input type="radio" name="pre29" id="pre29" value="2" required>En gran medida</label>
								<label><input type="radio" name="pre29" id="pre29" value="3" required>Solo una parte</label>
								<label><input type="radio" name="pre29" id="pre29" value="4" required>Nada</label>
 */
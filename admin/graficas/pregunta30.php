<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre30 = 1 then 'Muchas veces'
            when pre30 = 2 then 'Alguna veces' 
            when pre30 = 3 then 'Casi nunca'
            when pre30 = 4 then 'Nunca'
            end as nombre,count(*) num FROM `ens_y_apren`
            group by pre30
            ORDER by pre30;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * <label><input type="radio" name="pre30" id="pre30" value="1" required>Muchas veces</label>
								<label><input type="radio" name="pre30" id="pre30" value="2" required>Algunas veces</label>
								<label><input type="radio" name="pre30" id="pre30" value="3" required>Casi nunca</label>
								<label><input type="radio" name="pre30" id="pre30" value="4" required>Nunca</label>
 */
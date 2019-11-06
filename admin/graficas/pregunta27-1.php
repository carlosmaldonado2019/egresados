<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre27_1 = 1 then 'Muy efectivos'
            when pre27_1 = 2 then 'Efectivos' 
            when pre27_1 = 3 then 'Poco efectivos'
            when pre27_1 = 4 then 'Deficientes'
            end as nombre,count(*) num FROM `ens_y_apren`
            group by pre27_1
            ORDER by pre27_1;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);


/*
 * 									<tr>
										<td></td>
										<td class="tablahead">Muy efectivos</td>
										<td class="tablahead">Efectivos</td>
										<td class="tablahead">Poco Efectivos</td>
										<td><label>Deficientes</label></td>
									</tr>
									<tr>
										<td><label>Métodos de enseñanza</label></td>
										<td><input type="radio" name="pre27_1" id="pre27_1" value="1" required></td>
										<td><input type="radio" name="pre27_1" id="pre27_1" value="2" required></td>
										<td><input type="radio" name="pre27_1" id="pre27_1" value="3" required></td>
										<td><input type="radio" name="pre27_1" id="pre27_1" value="4" required></td>
									</tr>
 */
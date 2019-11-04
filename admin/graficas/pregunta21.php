<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT pre21 as nombre,count(*) num FROM `datos_posgrado`
            group by pre21
            ORDER by pre21;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);
/*
 * 			<label><input type="radio" name="pre21" id="pre21" value="excelente" required>Excelente</label>
								<label><input type="radio" name="pre21" id="pre21" value="buena" required>Buena</label>
								<label><input type="radio" name="pre21" id="pre21" value="deficiente" required>Deficiente</label>
								<label><input type="radio" name="pre21" id="pre21" value="mala" required>Mala</label>
 */
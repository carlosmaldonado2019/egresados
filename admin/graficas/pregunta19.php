<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT pre19 as nombre,count(*) num FROM `datos_posgrado`
            group by pre19
            ORDER by pre19;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 									<option value="">-- Selecciona --</option>
									<option>Ya contaba con trabajo</option>
									<option>Menos de un mes</option>
									<option>Un mes</option>
									<option>Dos meses</option>
									<option>Tres meses</option>
									<option>Cuatro meses</option>
									<option>Cinco meses</option>
									<option>Seis meses</option>
									<option>Siete meses</option>
									<option>Ocho meses</option>
									<option>Nueve meses</option>
									<option>Diez meses</option>
									<option>Once meses</option>
									<option>Doce meses</option>
									<option>24 meses</option>
									<option>36 meses</option>
									<option>mas de 36 meses</option>
 */
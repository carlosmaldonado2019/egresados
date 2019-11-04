<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT pre20 as nombre,count(*) num FROM `datos_posgrado`
            group by pre20
            ORDER by pre20;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 						<label><input type="radio" name="pre20" id="pre20" value="mejoró" required>Mejoró</label>
								<label><input type="radio" name="pre20" id="pre20" value="está igual" required>Está igual</label>
								<label><input type="radio" name="pre20" id="pre20" value="empeoró" required>Empeoró</label>
								<label><input type="radio" name="pre20" id="pre20" value="no aplica" required>No aplica</label>
 */
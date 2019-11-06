<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT pre31 as nombre,count(*) num FROM `actividades`
            group by pre31
            ORDER by pre31;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 								<label><input type="radio" name="pre31" id="pre31" value="Si" required>Si</label>
								<label><input type="radio" name="pre31" id="pre31" value="No" required>No</label>
								<label><input type="radio" name="pre31" id="pre31" value="No aplica" required>No aplica</label>
 */
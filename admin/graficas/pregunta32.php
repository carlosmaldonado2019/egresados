<?php


/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case when pre32 = 1 then 'Sí, se contemplaron modos variados y eficaces de incorporación'
            when pre32 = 2 then 'No existieron posibilidades de incorporación'
            when pre32 = 3 then 'Las oportunidades de incorporación fueron escasas'
            when pre32 = 4 then 'Las opciones aunque fueron múltiples, el acceso estuvo limitado y los requisitos fueron poco asequibles'
            when pre32 = 5 then'No aplica' end
            as nombre,count(*) num FROM `actividades`
            group by pre32
            ORDER by pre32;";

$data = array();
$result = mysqli_query($con, $sql);
foreach ($result as $row) {

    $data[] = $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 *
 * 								<label><input type="radio" name="pre32" id="pre32" value="1" required>Sí, se contemplaron modos variados y eficaces de incorporación</label>
								<label><input type="radio" name="pre32" id="pre32" value="2" required>No existieron posibilidades de incorporación</label>
								<label><input type="radio" name="pre32" id="pre32" value="3" required>Las oportunidades de incorporación fueron escasas</label>
								<label><input type="radio" name="pre32" id="pre32" value="4" required>Las opciones aunque fueron múltiples, el acceso estuvo limitado y los requisitos fueron poco asequibles</label>
								<label><input type="radio" name="pre32" id="pre32" value="5" required>No aplica</label>
 */
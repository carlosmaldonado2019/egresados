<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre16 = 1 then 'Tiempo completo (Su única ocupación era estudiar)'
            when pre16 = 2 then 'Medio tiempo (Estudiaba y trabajaba)' 
            when pre16 = 3 then 'Tiempo Parcial (Trabajaba la mayor parte del tiempo)'
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre16
            ORDER by pre16;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 								<label>16. Durante la mayor parte de sus estudios de posgrado su dedicación a los estudios, fue: <small>requerido</small></label>

								<label><input type="radio" name="pre16" id="pre16" value="1" required>Tiempo completo (Su única ocupación era estudiar)</label>
								<label><input type="radio" name="pre16" id="pre16" value="2" required>Medio tiempo (Estudiaba y trabajaba)</label>
								<label><input type="radio" name="pre16" id="pre16" value="3" required>Tiempo Parcial (Trabajaba la mayor parte del tiempo)</label>
 */
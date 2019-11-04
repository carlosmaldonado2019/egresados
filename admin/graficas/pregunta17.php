<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre17 = 1 then 'Usted mismo'
            when pre17 = 2 then 'Padres' 
            when pre17 = 3 then 'Beca'
            when pre17 = 4 then 'Esposo'
            when pre17 = 5 then 'Usted y su Pareja<'
            when pre17 = 6 then 'Otro'
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre17
            ORDER by pre17;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 								<label>17. ¿Durante sus estudios de posgrado ¿cuál fue su principal sostén económico? <small>requerido</small></label>

								<label><input type="radio" name="pre17" id="pre17" value="1" >Usted mismo</label>
								<label><input type="radio" name="pre17" id="pre17" value="2" >Padres</label>
								<label><input type="radio" name="pre17" id="pre17" value="3" >Beca</label>
									<select name="pre17_beca" id="pre17_beca" >

							    		<option value="">-- Selecciona --</option>
							    		<option value="Beca director">Beca director</option>
							    		<option value="Conacyt">Conacyt</option>
							    		<option value="Sindicato">Sindicato</option>
							    		<option value="Beca Merito">Beca Merito</option>
							    		<option value="Beca Merito">Beca Sindicato</option>
							    		<option value="No" hidden>No</option>

						    		</select>
								<label><input type="radio" name="pre17" id="pre17" value="4" >Esposo (a)</label>
								<label><input type="radio" name="pre17" id="pre17" value="5" >Usted y su Pareja</label>
								<label><input type="radio" name="pre17" id="pre17" value="6" >Otro</label>
									<input type="text" name="pre170" id="pre170" placeholder="Especifique otro">
 */
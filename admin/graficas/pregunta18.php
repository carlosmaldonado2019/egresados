<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 03/09/2019
 * Time: 09:38 AM
 */

include "conex.php";
$sql = "SELECT case 
            when pre18 = 1 then 'Si'
            when pre18 = 0 then 'No' 
            end as nombre,count(*) num FROM `datos_posgrado`
            group by pre18
            ORDER by pre18;";

$data= array();
$result = mysqli_query($con, $sql);
foreach ($result as $row){

    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

/*
 * 							<label><input type="radio" name="pre18" id="pre18" value="1" required>Si</label>
								<label><input type="radio" name="pre18" id="pre18" value="0" required>No</label>
 */
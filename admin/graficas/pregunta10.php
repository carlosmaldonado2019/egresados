<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 04/09/2019
 * Time: 07:49 AM
 */

/*<label><input type="radio" name="pre10" id="pre101" value="1" > Extremadamente importante</label>
									<label><input type="radio" name="pre10" id="pre102" value="2" > Muy importante</label>
									<label><input type="radio" name="pre10" id="pre103" value="3" > Importante</label>
									<label><input type="radio" name="pre10" id="pre104" value="4" > Algo importante</label>
									<label><input type="radio" name="pre10" id="pre105" value="5" > Poco importante</label>*/
include "conex.php";
$sql = "SELECT case when pre10 = 1 then 'Extremadamente importante' when pre10 = 2 then 'Muy importante' when pre10 = 3 then 'Importante' 
        when pre10 = 4 then 'Algo importante' when pre10 = 5 then 'Poco importante' end as nombre ,count(*) num FROM `datos_posgrado`
          where pre6 = 0
            group by pre10
            ORDER by pre10;";
$result = mysqli_query($con, $sql);
$data= array();
foreach ($result as $row){
    $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);
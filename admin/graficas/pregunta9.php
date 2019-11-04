<?php
/**
 * Created by PhpStorm.
 * User: CMaldonado
 * Date: 04/09/2019
 * Time: 07:49 AM
 */
$jsondata = array("Necesidad de trabajar" => 0,
                    "Motivos personales" =>0,
                    "El asesor de tesis no maneja el tema de la tesis" =>0,
                    "El asesor de tesis no tiene amplios conocimientos" =>0,
                    "El asesor de tesis no dedica el tiempo suficiente" =>0,
                    "Insatisfacción personal con la temática de investigación" =>0,
                    "Problemas personales con el asesor de tesis" =>0,
                     "Falta de recursos (económicos, técnicos y/o materiales)" => 0,
                     "Indecisión acerca del tema(s) por investigar" =>0,
                    "No contó con la tutoría académica adecuada" =>0,
                    "Falta de motivación" =>0,
                     "No aplica" =>0,
                    "Otro" =>0);

$marks = array(1=> array("Necesidad de Trabajar" =>0),
    2=> array("Motivos personales" => 0),
    3=> array("El asesor de tesis no maneja el tema de la tesis" =>0),
    4=> array("El asesor de tesis no tiene amplios conocimientos" =>0),
    5=> array("El asesor de tesis no dedica el tiempo suficiente" =>0),
    6=> array("Insatisfacción personal con la temática de investigación" =>0),
    7=> array("Problemas personales con el asesor de tesis" =>0),
    8=> array( "Falta de recursos (económicos, técnicos y/o materiales)" => 0),
    9=> array("Indecisión acerca del tema(s) por investigar" =>0,),
    10=> array( "No contó con la tutoría académica adecuada" =>0),
    11=> array( "Falta de motivación" =>0),
    12=> array("No aplica" =>0),
    13=> array("Otro" =>0));

include "conex.php";
$sql = "SELECT case when pre9 = 1 then 'Necesidad de Trabajar' 
          when pre9 = 2 then 'Motivos personales' 
          when pre9 = 3 then 'El asesor de tesis no maneja el tema de la tesis' 
          when pre9 = 4 then 'El asesor de tesis no tiene amplios conocimientos' 
          when pre9 = 5 then 'El asesor de tesis no dedica el tiempo suficiente' 
          when pre9 = 6 then 'Insatisfacción personal con la temática de investigación' 
          when pre9 = 7 then 'Problemas personales con el asesor de tesis' 
          when pre9 = 8 then 'Falta de recursos (económicos, técnicos y/o materiales' 
          when pre9 = 9 then 'Indecisión acerca del tema(s) por investigar' 
          when pre9 = 10 then 'No contó con la tutoría académica adecuada' 
          when pre9 = 11 then 'Falta de motivación' 
          when pre9 = 12 then 'No aplica' 
          when pre9 = 13 then 'Otro' end as nombre,count(*) num FROM `datos_posgrado`
          where pre6 = 0
            group by pre9
            ORDER by pre9;";
$result = mysqli_query($con, $sql);
$data= array();
foreach ($result as $row){
   $data[]= $row;
}
echo json_encode($data);
mysqli_close($con);

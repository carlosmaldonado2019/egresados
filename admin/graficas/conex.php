<?php

$server="MYSQL5006.site4now.net"; //server
$user="9f6318_educont";    //usuario
$pass="fcaMXL13";       //pass
$bd="db_9f6318_educont"; //bd

$con = mysqli_connect($server,$user,$pass,$bd);

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

?>


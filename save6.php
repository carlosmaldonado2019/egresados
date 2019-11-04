<?php
	include("conex.php");

	$email = $_POST['email'];

	$pre42Col = "";
	$pre42Val = "";
	if(isset($_POST['pre42'])){
		foreach($_POST['pre42'] as $pre42){
			$pre42Col .= ", pre42_$pre42";
			$pre42Val .= ", 1";
		}
	}
	$pre43Col = "";
	$pre43Val = "";
	if(isset($_POST['pre43'])){
		foreach($_POST['pre43'] as $pre43){
			$pre43Col .= ", pre43_$pre43";
			$pre43Val .= ", 1";
		}
	}

	$pre44      = $_POST['pre44'];
	if ($pre44 == 3)
		{$pre440 	= $_POST['pre440'];}
	else
		{$pre440 	= "no";}
	$pre45      = $_POST['pre45'];
	$pre46      = $_POST['pre46'];
	$pre47      = $_POST['pre47'];
	if ($pre47 == 1) {
		$pre47_por  = $_POST['pre47_por'];
		$pre47_por0	= $_POST['pre47_por0'];
		$pre47_obt  = $_POST['pre47_obt'];
		$pre47_obt0 = $_POST['pre47_ob0'];
	}
	else {
		$pre47_por  = 0;
		$pre47_por0	= "no";
		$pre47_obt  = 0;
		$pre47_obt0 = "no";
	}
	
	$pre48      = $_POST['pre48'];
	$pre49      = $_POST['pre49'];

	$sql = "INSERT INTO impactoyproductividad(
		email
		$pre42Col$pre43Col
		,pre44,pre440,pre45,pre46,pre47,pre47_por,pre47_por0,pre47_obt,pre47_obt0,pre48,pre49) 
		VALUES ('$email'
				$pre42Val$pre43Val
				,'$pre44','$pre440','$pre45','$pre46','$pre47','$pre47_por','$pre47_por0','$pre47_obt','$pre47_obt0','$pre48','$pre49')";


	//$sql2=mysql_query("UPDATE datos_personales SET password='$pwd' WHERE email='$email'");
	if (mysqli_query($con, $sql)) {
		header("Location:form7.php?email=$email");
	}else {
		header("Location:form7.php");
	}
?>
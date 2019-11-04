<?php  
	include("conex.php");

	$email		= $_POST['email'];
	$pre34		= $_POST['pre34'];
	if ($pre34 == "si")
		$pre34_cual	= $_POST['pre34_cual'];
	else
		$pre34_cual = "0";
	$pre35		= $_POST['pre35'];
	if ($pre35 == "Si")
		$pre36		= $_POST['pre36'];
	else
		$pre36		= 0;
	$pre37_1	= $_POST['pre37_1'];
	$pre37_2	= $_POST['pre37_2'];
	$pre37_3	= $_POST['pre37_3'];
	$pre38_1	= $_POST['pre38_1'];
	$pre38_2	= $_POST['pre38_2'];
	$pre38_3	= $_POST['pre38_3'];
	$pre38_4	= $_POST['pre38_4'];
	$pre39		= $_POST['pre39'];
	$pre40		= $_POST['pre40'];
	$pre41		= $_POST['pre41'];


	$sql = "INSERT INTO compromisoytutoria(email,pre34,pre34_cual,pre35,pre36,pre37_1,pre37_2,pre37_3,pre38_1,pre38_2,pre38_3,pre38_4,pre39,pre40,pre41) 
		VALUES ('$email','$pre34','$pre34_cual','$pre35','$pre36',$pre37_1,$pre37_2,$pre37_3,$pre38_1,$pre38_2,$pre38_3,$pre38_4,'$pre39','$pre40',$pre41)";
	//print_r($sql);


	if (mysqli_query($con, $sql)) {
		header("Location:form6.php?email=$email");
	}
	else {
		header("Location:form6.php?");
	}
?>
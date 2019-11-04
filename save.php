<?php 
	include("conex.php");

	$nombre    = strtoupper($_POST['nombre']);
	$paterno   = strtoupper($_POST['ap_pat']);
	if (isset($_POST['ap_mat']))
		$materno   = strtoupper($_POST['ap_mat']);
	else
		$materno   = "";
	$sexo      = strtoupper($_POST['sexo']);
	$email     = $_POST['email'];
	$email_a   = $_POST['email_alt'];
	$direccion = strtoupper($_POST['direccion']);
	$colonia   = strtoupper($_POST['colonia']);
	$municipio = strtoupper($_POST['municipio']);
	$estado    = strtoupper($_POST['estado']);
	$cp        = $_POST['cp'];
	$tel_p     = $_POST['tel_p'];
	$tel_c     = $_POST['tel_c'];
	$tel_t     = $_POST['tel_t'];
	//$password  = $sexo.$cp;
	//$psswd = substr( md5(microtime()), 1, 10);

	$sql = "SELECT email FROM datos_personales WHERE email='$email'";
	$result = mysqli_query($con, $sql);
	$email2='';
	while ($row=mysqli_fetch_assoc($result)) {
		$email2=$row['email'];
	}

	if ($email2) {
		header("Location:form.php?msj=1&email=$email");
	}
	else{	
		//print_r($_POST);
		$sql ="INSERT INTO datos_personales(email,nombre,ap_pat,ap_mat,sexo,email_alt,direccion,colonia,municipio,estado,cp,tel_p,tel_c,tel_t)
			VALUES('$email','$nombre','$paterno','$materno','$sexo','$email_a','$direccion','$colonia','$municipio','$estado','$cp','$tel_p','$tel_c','$tel_t')";
		
		if (mysqli_query($con, $sql)) {
			header("Location:form2.php?email=$email");
		}
		else {
			header("Location:form.php?msj=2");
		}
	}
?>
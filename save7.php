<?php
	include("conex.php");

	$email	= $_POST['email'];
	$psswd 	= $_POST['contr'];
	$pwd = md5($psswd);


	$sql="UPDATE datos_personales SET password='$pwd' WHERE email='$email'";
	if (mysqli_query($con, $sql)) {
		// $cuerpo="Tu datos se han guardado Exitosamente <br>";
		// $cuerpo=$cuerpo."Su Usuario es:<br>";
		// $cuerpo=$cuerpo.$email."<br>";
		// $cuerpo=$cuerpo."y su Password es:<br>";
		// $cuerpo=$cuerpo.$psswd."<br>";
		// $cuerpo=$cuerpo."--------------------------------------------------------------------------<br>";
		// $cuerpo=$cuerpo."Estimado Alumno gracias por contestar la encuesta su informacion esta segura con nosotros";
		// $cuerpo=$cuerpo."Por favor de <a href='http://www.facultaddecienciasadministrativas.com/odontologia/user/index.php'>Iniciar Secion</a> para que cambie su Password<br>";
		// $cuerpo=$cuerpo."Gracias por su Atencion";
		




		// $destinatario = $email;
		// $asunto = "Facultad de Odontologia";
		// $headers = "MIME-Version: 1.0\r\n"; 
		// $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
		// $headers .= "FROM: <odontologia@facultaddecienciasadministrativas.com>\r\n"; 
		//  $isdone=mail($destinatario,$asunto,$cuerpo,$headers);
		//  if($isdone)
	 //            header("Location:index.php?msj=1&email='$email'");
	 //        else
	 //            header("Location:index.php?msj=2");
		
		header("Location:index.php?msj=1&email=$email");
	}else {
		header("Location:index.php?msj=2");
	}
?>
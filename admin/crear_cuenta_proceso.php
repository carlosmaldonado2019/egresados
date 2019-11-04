<?php  

	include('sesion.php');

	include('conex.php');



	$id       = $_POST['id'];

	$nombre   = strtoupper($_POST['nombre']);

	$paterno  = strtoupper($_POST['paterno']);

	$materno  = strtoupper($_POST['materno']);

	$email    = $_POST['email'];

	$pass     = $_POST['password'];

	$rol      = $_POST['rol'];

	$status   = $_POST['status'];



	$password    = md5($pass);



	//print_r($_POST);



	$consulta=mysqli_query($con,"SELECT id FROM user WHERE id=".$id);

	while ($row=mysqli_fetch_assoc($consulta)) {

		$ids=$row['id'];

	}



	if ($id == $ids) {

		

		$save = mysqli_query($con,"INSERT INTO user (id_rol,email,password,status,nombre,paterno,materno) 

			VALUES ('$rol','$email','$password','$status','$nombre','$paterno','$materno')");



		if ($save) {

			header("Location: crear_cuenta.php?msj=1");

		}else{

			header("Location: crear_cuenta.php?msj=2");

		}

	}else{

		header("Location: crear_cuenta.php?msj=3");

	}

	

?>
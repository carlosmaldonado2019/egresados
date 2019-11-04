<?php



	//conectar BD

	include("conex.php");  

		

	$usr = $_POST['email'];

	//$pw = $_POST['password'];

	//Obtengo la version encriptada del password

	//$pw_enc = md5($pw);

	

	//$sql = "SELECT id FROM user WHERE email = '".$usr."' AND password = '".$pw_enc."' AND status='1' ";	
	$sql = "SELECT id FROM user WHERE email = '".$usr."' AND status='1'";	

	$result	= mysqli_query($con,$sql); 

	//print_r($result);

	$uid = "";

	

	//Si existe al menos una fila

	if( $fila = mysqli_fetch_array($result,MYSQLI_ASSOC) )

	{		
		//$pw_enc = md5($fila['password']);
		//Obtener el Id del usuario en la BD 		

		$uid = $fila['id'];

		//Iniciar una sesion de PHP

		session_start();

		//Crear una variable para indicar que se ha autenticado

		$_SESSION['autenticado']    = 'SI';

		//Crear una variable para guardar el ID del usuario para tenerlo siempre disponible

		$_SESSION['uid']       		= $uid;
	//	echo $pw_enc;

?>

		<form name="formulario" method="post" action="inicio.php">

			<input type="hidden" name="idUsr" value='<?php echo $uid ?>' />

		</form>

<?php

	}

	else {

		//En caso de que no exista una fila...

		//..Crear un formulario para redireccionar al usuario a la pagina de login 

		//enviandole un codigo de error

?>

		<form name="formulario" method="post" action="index.php">

			<input type="hidden" name="msg_error" value="1">

		</form>

<?php

	}

?>

					

<script type="text/javascript"> 

	//Redireccionar con el formulario creado

	document.formulario.submit();

</script>
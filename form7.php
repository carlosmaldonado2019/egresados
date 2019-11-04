<?php  
	error_reporting(E_ALL ^ E_NOTICE);

	$email=$_GET['email'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Maestria en Administración </title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/form.css">
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
		<link rel="shortcut icon" href="img/favicon_logo.png">
		<script>
			$(document).ready(function() {
				$( ".contenido" ).hide();
				$( ".contenido" ).fadeIn(1000);
			});
			if(history.forward(1)){
				history.replace(history.forward(1));
			}
		</script>
		<style type="text/css">
			.columns3 {
			}
			.tablahead {
			    min-width: 80px;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<!-- Header -->
		<header>
            <h1><img src="img/logo.png" alt=""></h1>
		</header>
		<!-- Main -->
		<section class="main">
			<!-- Formulario -->
			<div class="contenido">
				<form action="save7.php" method="POST">
					<input type="hidden" name="email" id="email" value="<?php echo $email; ?>"  />
					<fieldset>
						<legend>Establecer contraseña</legend>
							<div class="row">
								<div class="columns3">
									<label>Su usuario es: <input type="text" value="<?php echo $email; ?>" disabled /> </label>
								</div>
							</div>
							<div class="row">
								<div class="columns3">
									<label>Contraseña:&nbsp;&nbsp;&nbsp; <input type="password" name="contr" id="contr" /> </label>
									<br><label style="padding-left: 50px;" for="contr">Proporcione una contraseña</label>
								</div>
							</div>
							<div class="row">
								<div class="columns3">
									<input type="submit" class="btn" value="Siguiente >>">
								</div>
							</div>
					</fieldset>
				</form>
			</div><br>
			
		</section>
		<!-- Footer -->
		<footer>
			<p>Universidad Autónoma de Baja California | Maestria en Administración  - Copyright 2019 ©</p>
		</footer>
	</body>
</html>
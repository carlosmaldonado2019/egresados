<?php   

	error_reporting(E_ALL ^ E_NOTICE);



	$msj=$_GET['msj'];

	if ($msj == 1) {

		$msj = "<div class='alert alert-danger'>Este Correo <b><u>".$_GET['email']."</u></b> Ya Existe</div>";

	}

	if ($msj == 2) {

		$msj = "<div class='alert alert-danger'>Error Intente mas Tarde</div>";

	}

?>

<!DOCTYPE html>

<html>

	<head>

		<meta charset="UTF-8">

		<link rel="stylesheet" type="text/css" href="css/style.css">
		<title>Maestria en Administración</title>
		<link rel="stylesheet" type="text/css" href="css/form.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
		<script type="text/javascript" src="js/jquery.maskedinput.js"></script>
		<link rel="shortcut icon" href="img/favicon_logo.png">
		<style>
			.alert {

				padding: 15px;

			  	margin-bottom: 20px;

			  	border: 1px solid transparent;

			  	border-radius: 4px;

			}

			.alert-danger {

			  	background-color: #f2dede;

			  	border-color: #ebccd1;

			  	color: #a94442;

			}

		</style>

		<script>

			$(document).ready(function() {

				$( ".contenido" ).hide();

				$( ".contenido" ).fadeIn(1000);

			});

			if(history.forward(1)){

			history.replace(history.forward(1));

		}

			jQuery(function($){

				$("#tel_p").mask("(999)999-9999");

				$("#tel_c").mask("(999)999-9999");

				$("#tel_t").mask("(999)999-9999");

				$("#cp").mask("99999");

			});

		</script>

	</head>

	<body>

		<!-- Header -->

		<header>

            <h1><img src="img/logoegresados.png" alt=""></h1>
		</header>

		<!-- Main -->

		<section class="main">
			<!-- Formulario -->
			<div class="contenido">
				<p class="redaccion">
					<b>Instrucciones:</b> Agradecemos colocar una 'X' en el recuadro que corresponda a su respuesta,
					hacer un breve comentario cuando se le solicite aclarar alguna respuesta especifica y seguir las indicaciones en cada pregunta.
				</p>
				<form action="save.php" method="POST">
					<?php echo $msj; ?>
					<fieldset>
						<legend>DATOS PERSONALES</legend>
						<div class="row">
							<div class="columns">
								<label>Nombre: <small>requerido</small></label>
								<input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
							</div>
							<div class="columns">
								<label>Apellido Paterno: <small>requerido</small></label>
								<input type="text" name="ap_pat" id="ap_pat" placeholder="Apellido Paterno" required>
							</div>

							<div class="columns">

								<label>Apellido Materno:</label>

								<input type="text" name="ap_mat" id="ap_mat" placeholder="Apellido Materno">

							</div>

						</div>

						<div class="row">

							<div class="columns">

								<label>Sexo: <small>requerido</small></label>

								<input type="radio" name="sexo" id="sexo" value="M" required><label>Masculino</label>

								<input type="radio" name="sexo" id="sexo" value="F"><label>Femenino</label>

							</div>

						</div>

						<div class="row">

							<div class="columns2">

								<label>E-mail: <small>requerido</small></label>

								<input type="email" name="email" id="email" placeholder="Correo Electronico" required>

					    	</div>

					    	<div class="columns2">

					    		<label>E-mail alterno: <small>requerido</small></label>

					    		<input type="email" name="email_alt" id="email_alt" placeholder="Correo Electronico Alterno" required>

					    	</div>

					    </div>

					</fieldset>

					<fieldset>

						<legend>DATOS DOMICILIO ACTUAL</legend>

						<div class="row">

							<div class="columns2">

								<label>Dirección: <small>requerido</small></label>

								<input type="text" name="direccion" id="direccion" placeholder="Direccion" required>

							</div>

							<div class="columns2">

								<label>Colonia: <small>requerido</small></label>

								<input type="text" name="colonia" id="colonia" placeholder="Colonia" required>

							</div>

						</div>

						<div class="row">

							<div class="columns">

								<label>Municipio: <small>requerido</small></label>

								<input type="text" name="municipio" id="municipio" placeholder="Municipio" required>

							</div>

							<div class="columns">

								<label>Estado: <small>requerido</small></label>

								<input type="text" name="estado" id="estado" placeholder="Estado" required>

							</div>

							<div class="columns">

								<label>Codigo Postal: <small>requerido</small></label>

								<input type="text" name="cp" id="cp" placeholder="Codigo Postal" required>

							</div>

						</div>

						<div class="row">

							<div class="columns">

								<label>Teléfono Particular (con LADA): <small>requerido</small></label>

								<input type="text" name="tel_p" id="tel_p" placeholder="Teléfono Particular" required>

							</div>

							<div class="columns">

								<label>Teléfono Celular: <small>requerido</small></label>

								<input type="text" name="tel_c" id="tel_c" placeholder="Teléfono Celular" required>

							</div>

							<div class="columns">

								<label>Teléfono Trabajo: <small>requerido</small></label>

								<input type="text" name="tel_t" id="tel_t" placeholder="Teléfono Trabajo" required>

							</div>

					    </div>

					</fieldset>

				    	<input type="submit" class="btn" value="Siguiente >>">
				</form>
			</div>
		</section>

		<!-- Footer -->

        <footer id="sticky-footer" class="py-4 text-white">
            <div class="container text-center">
                <small>Universidad Autónoma de Baja California | Maestria en Administración | Copyright 2019 ©<small>
            </div>
        </footer>

	</body>

</html>
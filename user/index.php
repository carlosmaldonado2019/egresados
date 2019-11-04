<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Maestria en Administración </title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">

		<link rel="stylesheet" href="css/alertify.core.css" />
		<link rel="stylesheet" href="css/alertify.default.css" id="toggleCSS" />
        <script src="https://kit.fontawesome.com/273a534bf0.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/login.css">

		<!-- The fav icon -->
		<link rel="shortcut icon" href="img/favicon_logo.ico">

	</head>
    <body class="d-flex flex-column">
        <div id="page-content">
            <header>
                <h1><img style="min-width: 80%; max-width: 100%;" src="../img/logoegresados.png" alt=""></h1>
            </header>


            <div class="container text-center">
                <div class="row justify-content-center">

                    <div class="login-box">
                        <div class="login-box-body">
                            <p class="login-box-msg">Ingresa tus datos para el acceso al portal:</p>
                            <form action="validarEmail.php" method="post">
                                <div class="form-group has-feedback">
                                    <input type="email" name='email' placeholder="Correo"class="form-control"/>
                                </div>
                                <div class="form-group has-feedback">
                                    <input type="password" name='password' placeholder="Correo" class="form-control"/>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <button type="submit" class="btn btn-block btn-flat">Ingresar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <footer id="sticky-footer" class="py-4 text-white">
            <div class="container text-center">
                <small>Universidad Autónoma de Baja California | Maestria en Administración | Copyright 2019 ©<small>
            </div>
        </footer>


		<!--<section class="main">

			<div class="mensaje">
				<div id="box_bg">
					<div id="content">
						<h1>Login</h1>
						<form action="validarEmail.php" method="POST">

						<div id="login">Para loguearse favor de poner su correo y contraseña:<br/>
							<input type="email" name='email' placeholder="Correo" class="login user"/>
							<input type='password' name='password' placeholder='Password' class="login password"/>
						</div>
						

						<input type="submit" class="button green" value="Aceptar" />
						</form>

						<div class="checkbox">
							<li>
								<fieldset>
									<legend id="title2" class="desc">Olvide la <a href="reset_password.php">Contraseña</a></legend>
								    <label id="title2" class="desc"></label>
									<div>
										
									</div>
								</fieldset>
							</li>
						</div>
					</div>
				</div>
			</div>

			<div class="botones">
			</div>
		</section>-->


	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/alertify.min.js"></script>
	<script>
		function reset () {
			$("#toggleCSS").attr("href", "css/alertify.default.css");
			alertify.set({
				labels : {
					ok     : "OK",
					cancel : "Cancel"
				},
				delay : 5000,
				buttonReverse : false,
				buttonFocus   : "ok"
			});
		}
	</script>
	<?php 
		if (isset($_POST['msg_error'])) {
			
			switch (isset($_POST['msg_error'])) {
				case 1 :
				?>
				<script type="text/javascript"> 
		        	reset();
					alertify.error("El usuario o password son incorrectos");
					$("#password").focus();

		      	</script>
				<?php
					break;
				case 2 :
				?>
				<script type="text/javascript"> 
		        	reset();
					alertify.error("La seccion a la que intentaste entrar esta restringida.");

		      	</script>
				<?php
					break;
				case 3 :
				?>
				<script type="text/javascript"> 
		        	reset();
					alertify.error("Has Salido, Bye.");

		      	</script>
				<?php
					break;
				case 4 :
				?>
				<script type="text/javascript"> 
		        	reset();
					alertify.error("Tu Cuenta esta Inactiva.");

		      	</script>
				<?php
					break;
			}
		}
	?>

	<!-- external javascript
	================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->

	<!-- jQuery -->
	<script src="js/jquery-1.7.2.min.js"></script>	
	</body>
</html>
<?php  
	if(isset($_GET['msj'])) {
		$msj = $_GET['msj'];

		if ($msj == 1) {
			//$msj = "<div class='alert alert-success'>Se Envio un Correo al <b><u>".$_GET['email']."</u></b> Favor de Verificarlo..</div>";
			$msj = "<div class='alert alert-success'>La encuesta ha sido enviada con éxito</div>";
		}
		if ($msj == 2) {
			$msj = "<div class='alert alert-danger'>Error Intente mas Tarde o comuniquese con los administradores</div>";
		}
	}
		
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Maestria en Administración</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="shortcut icon" href="img/favicon_logo.png">
		<link rel="stylesheet" type="text/css" href="css/popup.css">
        <script src="https://kit.fontawesome.com/273a534bf0.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<style>
			.alert {
				padding: 15px;
			  	margin-bottom: 20px;
			  	border: 1px solid transparent;
			  	border-radius: 4px;
			}
			.alert-success {
			  	background-color: #dff0d8;
			  	border-color: #d6e9c6;
			  	color: #3c763d;
			}
			.alert-danger {
			  	background-color: #f2dede;
			  	border-color: #ebccd1;
			  	color: #a94442;
			}
		</style>
	</head>
    <body class="d-flex flex-column">
    <div id="page-content">
                <div class="botonesUp">
                    <a href="user/index.php" ><i class="fas fa-user"></i>Login</a>
                    <a href="form.php"><i class="far fa-id-card"></i>Regístrate</a>
                </div>
        <header>
            <h1><img style="min-width: 80%; max-width: 100%;" src="img/logoegresados.png" alt=""></h1>
        </header>


        <div class="container text-center">
            <div class="row justify-content-center">

                    <div class="col">
                        <div class="jumbotron">
                            <h1 class="display-4">Bienvenido</h1>
                            <p class="lead">La Maestria en Administración con el propósito establecer una relación recíproca, permanente y de vinculación con sus egresados,
                                agradece, de antemano, el llenado del siguiente cuestionario.</p>
                            <hr class="my-4">
                            <p>La Maestria en Administración garantiza la confidencialidad de la información que proporcione.</p>

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
    </body>
<!--	<body class="d-flex flex-column h-100">


                <div class="row">
                    <div class="col-lg-12">
                        <div class="botonesUp">
                            <a href="user/index.php" ><i class="fas fa-user"></i>Login</a>
                            <a href="form.php"><i class="far fa-id-card"></i>Regístrate</a>
                        </div>
                    </div>
                </div>
                <header>
                    <h1><img style="min-width: 80%; max-width: 100%;" src="img/logoegresados.png" alt=""></h1>
                </header>

                <main role="main" class="main flex-shrink-0">
                        <div class="container">
                            <div class="row justify-content-md-center" >
                                <div class="col">
                                    <div class="jumbotron">
                                        <h1 class="display-4">Bienvenido</h1>
                                        <p class="lead">La Maestria en Administración con el propósito establecer una relación recíproca, permanente y de vinculación con sus egresados,
                                            agradece, de antemano, el llenado del siguiente cuestionario.</p>
                                        <hr class="my-4">
                                        <p>La Maestria en Administración garantiza la confidencialidad de la información que proporcione.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                </main>

                <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
                    <div class="container text-center">
                        <small>Copyright &copy; Your Website</small>
                    </div>
                </footer>
	</body>-->
</html>
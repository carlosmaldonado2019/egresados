


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Maestria en Administración </title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="stylesheet" href="css/alertify.core.css" />
    <link rel="stylesheet" href="css/alertify.default.css" id="toggleCSS" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
    <script src="https://kit.fontawesome.com/273a534bf0.js"></script>
    <script src="js/jquery.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="assets/js/light-bootstrap-dashboard.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <!-- The fav icon -->
    <link rel="shortcut icon" href="img/favicon_logo.ico">
</head>
<style type="text/css">
    .counter{
        background-color: #ffffff;
        padding: 20px 0;
        border-radius: 5px;
    }
    .countermxl{
        background-color: #ffffff;
        padding: 20px 0;
        border-radius: 5px;
    }
    .counterens{
        background-color: #ffffff;
        padding: 20px 0;
        border-radius: 5px;
    }
    .countertij{
        background-color: #ffffff;
        padding: 20px 0;
        border-radius: 5px;
    }

    .counter-tittle{
        font-size: 40px;
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 0;
        text-align: center;
    }

    .count-text{
        font-size: 13px;
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 0;
        text-align: center;
    }
    .fa-2x{
        margin: 0 auto;
        float: none;
        display: table;
        color: #4ad1e5;
    }
</style>
<body class="d-flex flex-column">
<div id="page-content">
    <header>
        <h1><img style="min-width: 80%; max-width: 100%;" src="../img/logoegresados.png" alt=""></h1>
    </header>
    <div class="container-fluid">

        <div class="wrapper">
            <div class="sidebar" data-color="black">
                <!--
            Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

            Tip 2: you can also add an image using data-image tag
        -->
                <div class="sidebar-wrapper">
                    <div class="logo">
                        <a href="javascript:;" class="simple-text">
                            <?php
                            require_once ('sesion.php');
                            require_once ('conex.php');
                            echo $Usuario;
                            ?>
                        </a>
                    </div>
                    <ul class="nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="conteoAlumnos.php">
                                <i class="nc-icon nc-icon nc-paper-2"></i>
                                <p>Inicio</p>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href="perfil.php">
                                <i class="nc-icon nc-single-02"></i>
                                <p>Perfil</p>
                            </a>
                        </li>
                        <?php if($rol == 1){ ?>
                            <li>
                                <a class="nav-link" href="usuarios.php">
                                    <i class="nc-icon nc-circle-09"></i>
                                    <p>Usuarios</p>
                                </a>
                            </li>
                        <?php } ?>
                        <li>
                            <a class="nav-link" href="reportes.php">
                                <i class="nc-icon nc-chart-bar-32"></i>
                                <p>Reportes</p>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href="graficas.php">
                                <i class="nc-icon nc-chart-pie-36"></i>
                                <p>Graficas</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-panel">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg " color-on-scroll="500">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#pablo"></a>
                        <button href="" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-bar burger-lines"></span>
                            <span class="navbar-toggler-bar burger-lines"></span>
                            <span class="navbar-toggler-bar burger-lines"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <!--                    <ul class="nav navbar-nav mr-auto">
                                                    <li class="nav-item">
                                                        <a id="goback" href="#" class="nav-link" data-toggle="dropdown">
                                                            <i class="nc-icon nc-stre-left"></i> <span class="no-icon">Regresar</span>
                                                        </a>
                                                    </li>
                                                </ul>-->

                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="logout.php">
                                        <i class="nc-icon nc-button-power"></i> <span class="no-icon">Salir</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="container-fluid">
                        <div class="section"></div>
                    </div>
                </div>

</div> <!--menu/main-panel-->
</div> <!--menu/wrapper -->
</div> <!--header/container-fluid -->
</div> <!--header/page-content -->

<footer id="sticky-footer" class="py-4 text-white">
    <div class="container text-center">
        <small>Universidad Autónoma de Baja California | Maestria en Administración | Copyright 2019 ©<small>
    </div>
</footer>

<script src="js/alertify.min.js"></script>

<script>
    $(function(){



        function updateContent(loc){
            $.ajax({
                type: "GET",
                url: loc,
                contentType: "application/html",
                dataType: "html",
                success: function (result) {
                    $('.section').html(result);
                }
            });
        };

        $('.section').on('click','#alumnos, #verAlumno', function(e){
            e.preventDefault();
            history.pushState(this.href, this.title, this.href);
            updateContent(this.href);
        });

        $('.nav-link').on('click', function(e){
            e.preventDefault();
            history.pushState({url:this.href}, this.title, this.href);
            updateContent(this.href);
        });

        window.onpopstate = function(e){
            e.preventDefault();
            console.log(e.state);
            if(e.state === null) {
                //$('.section').load('conteoAlumnos.php');
                location.reload(true);
            }
            else{
                updateContent(document.location);
            }
            //

        };

        window.onload = function () {
            $.ajax({
                type: "GET",
                url: 'conteoAlumnos.php',
                contentType: "application/html",
                dataType: "html",
                success: function (result) {
                    $('.section').html(result);

                }
            });

        };
/*
        function keydown(e) {

            if ((e.which || e.keyCode) == 116 || ((e.which || e.keyCode) == 82 && ctrlKeyDown)) {
                // Pressing F5 or Ctrl+R
                e.preventDefault();
            } else if ((e.which || e.keyCode) == 17) {
                // Pressing  only Ctrl
                ctrlKeyDown = true;
            }
        };

        function keyup(e){
            // Key up Ctrl
            if ((e.which || e.keyCode) == 17)
                ctrlKeyDown = false;
        };*/

    });


</script>
</body>

</html>




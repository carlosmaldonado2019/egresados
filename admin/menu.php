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
                    <a class="nav-link" href="inicio.php">
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
                    <a class="nav-link" href="perfil.php">
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
                    <a class="nav-link" href="reportes.php">
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
        <!-- End Navbar -->
<script>
/*    $('#goback').click(function () {
        window.history.go(-1);
    })*/
</script>
<?php
    require('conex.php');
    ?>
<div class="row">

    <div class="col-md-3">
        <div class="counter" id="1">
            <i class="nc-icon nc-single-02 fa-2x"></i>
            <!--                    <h2 class="timer counter-tittle count-number">500</h2>-->
            <?php

            $sql  = "SELECT COUNT(*) as usuarios FROM datos_posgrado where posgrado = 1";
            $result = mysqli_query($con, $sql);
            if( $row = mysqli_fetch_array($result)) {
                ?>
                <a id="alumnos" href="alumnos.php?id=1"><h2 id="mexicali" class='timer counter-tittle count-number'><?php echo $row['usuarios'];?></h2></a>
                <?php
            }
            ?>
            <p class="count-text">Mexicali</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="counter" id="2">
            <i class="nc-icon nc-single-02 fa-2x"></i>
            <!--                    <h2 class="timer counter-tittle count-number">500</h2>-->

            <?php
            $sql  = "SELECT COUNT(*) as usuarios FROM datos_posgrado where posgrado = 2";
            $result = mysqli_query($con, $sql);
            if( $row = mysqli_fetch_array($result)) {
                ?>
                <a id="alumnos" href="alumnos.php?id=2"><h2  id="ensenada" class='timer counter-tittle count-number'><?php echo $row['usuarios'];?></h2></a>
                <?php
            }
            ?>
            <p class="count-text">Ensenada</p>
        </div>



    </div>
    <div class="col-md-3">
        <div class="counter" id="3">
            <i class="nc-icon nc-single-02 fa-2x"></i>
            <!--                    <h2 class="timer counter-tittle count-number">500</h2>-->

            <?php
            $sql  = "SELECT COUNT(*) as usuarios FROM datos_posgrado where posgrado = 3";
            $result = mysqli_query($con, $sql);
            if( $row = mysqli_fetch_array($result)) {
                ?>
                <a id="alumnos" href="alumnos.php?id=3"><h2 id="tijuana" class='timer counter-tittle count-number'><?php echo $row['usuarios'];?></h2</a>
                <?php
            }
            ?>
            <p class="count-text">Tijuana</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="counter" id="4">
            <i class="nc-icon nc-single-02 fa-2x"></i>
            <!--                    <h2 class="timer counter-tittle count-number">500</h2>-->

            <?php
            $sql  = "SELECT COUNT(*) as usuarios FROM datos_posgrado";
            $result = mysqli_query($con, $sql);
            if( $row = mysqli_fetch_array($result)) {
                ?>
                <a id="alumnos" href="alumnos.php?id=4"><h2 class='timer counter-tittle count-number'><?php echo $row['usuarios'];?></h2></a>
                <?php
                mysqli_close($con);
            }
            ?>
            <p class="count-text">Total de usuarios</p>
        </div>
    </div>
</div>

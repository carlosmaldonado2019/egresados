<?  include('sesion.php');  include('conex.php');      $siempre=0;$siempre2=0;$siempre3=0;  $casi_siempre=0;$casi_siempre2=0;$casi_siempre3=0;  $casi_nunca=0;$casi_nunca2=0;$casi_nunca3=0;  $nunca=0;$nunca2=0;$nunca3=0;    if ($rol == 1) {        $result = mysql_query("SELECT val_pos1,val_pos2,val_pos3 FROM datos_posgrado");    }else{        $result = mysql_query("SELECT val_pos1,val_pos2,val_pos3 FROM datos_posgrado WHERE posgrado='$rol' ");    }  while ($row2=mysql_fetch_assoc($result)) {    if ($row2['val_pos1'] == 'Siempre') {      $siempre++;    }    if ($row2['val_pos1'] == 'Casi siempre') {      $casi_siempre++;    }    if ($row2['val_pos1'] == 'Casi nunca') {      $casi_nunca++;    }    if ($row2['val_pos1'] == 'Nunca') {      $nunca++;    }    if ($row2['val_pos2'] == 'Siempre') {      $siempre2++;    }    if ($row2['val_pos2'] == 'Casi siempre') {      $casi_siempre2++;    }    if ($row2['val_pos2'] == 'Casi nunca') {      $casi_nunca2++;    }    if ($row2['val_pos2'] == 'Nunca') {      $nunca2++;    }    if ($row2['val_pos3'] == 'Siempre') {      $siempre3++;    }    if ($row2['val_pos3'] == 'Casi siempre') {      $casi_siempre3++;    }    if ($row2['val_pos3'] == 'Casi nunca') {      $casi_nunca3++;    }    if ($row2['val_pos3'] == 'Nunca') {      $nunca3++;    }  }?><html>  <head>    <title>Reporte</title>    <meta charset="UTF-8">    <link rel="stylesheet" type="text/css" href="reportes.css">    <style>      iframe{        position: fixed;      }      table{        position: absolute;        border-collapse: collapse;        width: 900px;      }      th{        background: #76923c;      }      a{        position: absolute;        margin-top: 350px;      }      .main{        margin-top: -70px;      }      .medio{        margin-top: 200px;      }      .left{        margin-left: 400px;      }    </style>  </head>  <body>    <!-- Header -->    <div class="header">      <!-- HEADER -->      <h1><img src="../img/logo_uabc.png" width="50" alt=""></h1>      <div class="texto">        <h2><strong>Universidad Autónoma de Baja California</strong></h2>        <h3>Facultad de Odontología</h3>        <h3>Coordinación de Posgrado e Investigación</h3>        <h3>Programa de seguimiento a Egresados</h3>      </div>      <h1><img src="../img/logo_odonto.png" width="50"></h1>      <!--<h1><img src="../img/conacyt.png" width="70"></h1>-->    </div>    <div class="main">      <label>Reporte</label>      <table border="1">        <thead>          <tr>            <th colspan="6">¿Cómo valora las materias que cursó en el plan de estudios de su posgrado?</th>          </tr>          <tr>            <th align="center">Adecuadas en carga horaria</th>            <th>Siempre</th>            <th>Casi Siempre</th>            <th>Casi Nunca</th>            <th>Nunca</th>						<th>rep</th>									          </tr>        </thead>        <tbody>          <tr >						<?php $kaka = "<a href='odonto_2.php?a=3&b=$b'>ee</a>"; ?>			             <td align="center">Adecuadas en la relación teoría y práctica</td>            <td align="center"><?php echo $siempre; ?></td>            <td align="center"><?php echo $casi_siempre; ?></td>            <td align="center"><?php echo $casi_nunca; ?></td>	            <td align="center"><?php echo $nunca; ?></td>																								          </tr>          <tr >            <td align="center">Congruencia entre la formación y la línea de investigación</td>            <td align="center"><?php echo $siempre2; ?></td>            <td align="center"><?php echo $casi_siempre2; ?></td>            <td align="center"><?php echo $casi_nunca2; ?></td>            <td align="center"><?php echo $nunca2; ?></td>									          </tr>          <tr >            <td align="center">Contenidos actualizados</td>            <td align="center"><?php echo $siempre3; ?></td>            <td align="center"><?php echo $casi_siempre3; ?></td>            <td align="center"><?php echo $casi_nunca3; ?></td>            <td align="center"><?php echo $nunca3; ?></td>          </tr>          <tr class="odd">            <td colspan="6" align="left">                <iframe src="../graficas/js_graficas/val_pos1.php" width="440" height="250" frameborder="0"></iframe>                <iframe src="../graficas/js_graficas/val_pos2.php" class="medio" width="440" height="250" frameborder="0"></iframe>                <iframe src="../graficas/js_graficas/val_pos3.php" class="left" width="440" height="250" frameborder="0"></iframe>            </td>          </tr>        </tbody>      </table>    </div>    <center><a href="JavaScript:window.print();">Imprimir</a></center>  </body></html>
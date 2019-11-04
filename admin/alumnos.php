<?php 
	include('sesion.php');
//	include('header.php');

	$id=$_GET['id'];
	$msj=$_GET['msj'];

	if ($msj == 1) {
		$msj = "<div class='alert alert-success'>Se Borro Exitosamente</div>";
	}
	if ($msj == 2) {
		$msj = "<div class='alert alert-danger'>Error Intente Luego!!!</div>";
	}
	if ($msj == 3) {
		$msj = "<div class='alert alert-success'>Su Cambio Fue Exitosamente</div>";
	}

	if ($id==1) {
		$posgrado="Maestría en Administración - Mexicali";
	}
	if ($id==2) {
		$posgrado="Maestría en Administración - Ensenada";
	}
	if ($id==3) {
        $posgrado="Maestría en Administración - Tijuana";
        }
	if($id ==4){
        $posgrado= "Total de Alumnos";
    }
?>

		<div class="container-fluid">
            <div class="row-fluid">
                <div class="row-fluid sortable">
                    <div class="box span12">
                        <div class="box-header well" data-original-title>
                            <h2><i class="icon-user"></i><?php echo $posgrado; ?></h2>
                        </div>
                        <div class="box-content">
                            <table class="table table-striped table-bordered bootstrap-datatable datatable">
                              <thead>
                                  <tr>
                                      <th>No</th>
                                      <th>Nombre</th>
                                      <th>Correo</th>
                                      <th>Municipio</th>
                                      <th>Telefono Personal</th>
                                      <th>Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                              <?php
                                include('conex.php');

                                $no=0;
                                if($id == 4 ) {
                                    $ver = mysqli_query($con,"SELECT * FROM datos_personales a, datos_posgrado b WHERE a.email=b.email");
                                }else{
                                    $ver = mysqli_query($con,"SELECT * FROM datos_personales a, datos_posgrado b WHERE a.email=b.email AND b.posgrado=".$id);
                                }

                              while($row = $ver->fetch_assoc()) {
                                    $idu=$row['id_usuario'];
                                    $no++;
                                    echo "<tr>";
                                    echo "<td class='center'>".$no."</td>";
                                    echo "<td>".   $row['nombre']." ".  $row['ap_pat']." ".  $row['ap_mat']."</td>";
                                    echo "<td class='center'>".$row['email']."</td>";
                                    echo "<td class='center'>".$row['municipio']."</td>";
                                    echo "<td class='center'>".$row['tel_p']."</td>";
                                    echo "<td class='center'>
                                            <a id= 'verAlumno' class='btn btn-success' href='show.php?idu=".$row['email']."&id=".$id."'><i class='icon-zoom-in icon-white'></i>  
                                                Ver
                                            </a>
                                            <a id='eliminarAlumno' class='btn btn-danger' href='delete_alu.php?idu=".$row['email']."&id=".$id."'><i class='icon-trash icon-white'></i> 
                                                Eliminar
                                            </a>
                                            </td>";
                                    echo "</tr>";
                                }
                              ?>
                              </tbody>
                          </table>
                          <?php echo $msj; ?>
                        </div>
                    </div><

                </div>

			</div>


	</div><!--/.fluid-container-->


</body>

</html>

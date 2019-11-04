<?php 
	include('sesion.php');


	error_reporting(0);

	if ($_GET['msj'] == 1) {
		$msj = "<div class='alert alert-success'>Su Cambio Fue Exitosamente</div>";
	}
	if ($_GET['msj'] == 2) {
		$msj = "<div class='alert alert-danger'>Su Cambio No Fue Exitosamente</div>";
	}
	if ($_GET['msj'] == 3) {
		$msj = "<div class='alert alert-danger'>Se Borro Cuenta Existosamente!!</div>";
	}
?>
<body>
		<div class="container-fluid">
		<div class="row-fluid">

			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header well" data-original-title>
						<h2><i class="icon-user"></i> Usuarios</h2>
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>
								  <th>Nombre</th>
								  <th>Correo</th>
								  <th>Role</th>
								  <th>Status</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  <?php 
						  	include('conex.php');

						  	$ver = mysqli_query($con,"SELECT * FROM user");
						  	while ($row=mysqli_fetch_assoc($ver)) {
						  		if ($row['id_rol'] == 1) {
						  			$roles = 'Administrador';
						  		}
						  		if ($row['id_rol'] == 2) {
						  			$roles = 'Especialidad en Endodoncia';
						  		}
						  		if ($row['id_rol'] == 3) {
						  			$roles = 'Especialidad en Ortodoncia';
						  		}
						  		if ($row['id_rol'] == 4) {
						  			$roles = 'Especialidad en Periodoncia';
						  		}
						  		if ($row['id_rol'] == 5) {
						  			$roles = 'Especialidad en Prostodoncia';
						  		}
						  		if ($row['status'] == 1) {
						  			$status = '<span class="label label-success">Activo</span';
						  		}
						  		if ($row['status'] == 2) {
						  			$status = '<span class="label label-important">Inactivo</span';
						  		}
						  		echo "<tr>";
						  		echo "<td>".$row['nombre']." ".$row['paterno']." ".$row['materno']."</td>";
						  		echo "<td class='center'>".$row['email']."</td>";
						  		echo "<td class='center'>".$roles."</td>";
						  		echo "<td class='center'>".$status."</td>";
						  		echo "<td class='center'>
						  				<a class='btn btn-primary' href='edit.php?id=".$row['id']."'>
										<i class='icon-edit icon-white'></i>  
											Cambiar Status                                            
										</a>
										<a class='btn btn-danger' href='delete.php?id=".$row['id']."'>
											<i class='icon-trash icon-white'></i> 
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
				</div><!--/span-->
			
			</div><!--/row-->
        </div><!--/fluid-row-->
	</div><!--/.fluid-container-->
</body>
</html>

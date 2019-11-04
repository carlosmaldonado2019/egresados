<?php  
	include('sesion.php');
	include('conex.php');

	$id=$_GET['id'];

	$ver = mysqli_query($con,"SELECT * FROM user WHERE id=".$id);
	while ($row=mysqli_fetch_assoc($ver)) {
		$ids=$row['id'];
		$status=$row['status'];
	}

	if ($ids == $id) {
		$delete=mysqli_query($con,"DELETE FROM user WHERE id=".$id);

		if ($delete) {
			header("Location: usuarios.php?msj=3");
		}else{
			header("Location: usuarios.php?msj=2");
		}
	}else{
		header("Location: usuarios.php?msj=2");
	}

?>
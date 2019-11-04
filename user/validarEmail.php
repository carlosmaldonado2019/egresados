<?php
	include("conex.php");
	$usr = $_POST['email'];
	$pw = $_POST['password'];
	$pw_enc = md5($pw);
	$sql = "SELECT id_usuario FROM datos_personales WHERE email = '".$usr."' AND password = '".$pw_enc."' ";
	$result = mysqli_query($con, $sql);
	$uid = "";
	if( $fila = mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
		$uid = $fila['id_usuario'];
		session_start();
		$_SESSION['autenticado']    = 'SI';
		$_SESSION['uid']       		= $uid;
?>
		<form name="formulario" method="post" action="inicio.php">
			<input type="hidden" name="idUsr" value='<?php echo $uid ?>' />
		</form>
<?php
	}
	else {
        $sql = "SELECT id FROM user WHERE email = '".$usr."' AND password = '".$pw_enc."' ";
        $result = mysqli_query($con, $sql);
            if( $fila = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                $uid = $fila['id'];
                session_start();
                $_SESSION['autenticado'] = 'SI';
                $_SESSION['uid'] = $uid;
                ?>
                <form name="formulario" method="post" action="../admin/inicio.php">
                    <input type="hidden" name="idUsr" value='<?php echo $uid ?>'/>
                </form>
                <?php
            }
                else{
                    ?>
                    <form name="formulario" method="post" action="index.php">
                        <input type="hidden" name="msg_error" value="1">
                    </form>
                    <?php
                }
                ?>

<?php
	}
?>
<script type="text/javascript">
	document.formulario.submit();
</script>
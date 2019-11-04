<?php  
	error_reporting(E_ALL ^ E_NOTICE);

	$email=$_GET['email'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Maestria en Administración </title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/form.css">
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
		<script type="text/javascript" src="js/otro.js"></script>
		<script type="text/javascript" src="js/hidders.js"></script>
		<link rel="shortcut icon" href="img/favicon_logo.png">
		<script>
			$(document).ready(function() {
				$( ".contenido" ).hide();
				$( ".contenido" ).fadeIn(1000);
			});
			if(history.forward(1)){
				history.replace(history.forward(1));
			}
		</script>
		<style type="text/css">
			.columns3 {
				width: 70%;
			}
			.tablahead {
			    min-width: 80px;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<!-- Header -->
		<header>
            <h1><img src="img/logo.png" alt=""></h1>
		</header>
		<!-- Main -->
		<section class="main">
			<!-- Formulario -->
			<div class="contenido">
				<p class="redaccion">
					<b>Instrucciones:</b> Agradecemos colocar una 'X' en el recuadro que corresponda a su respuesta,
					hacer un breve comentario cuando se le solicite aclarar alguna respuesta especifica y seguir las indicaciones en cada pregunta.
				</p>
				<form action="save6.php" method="POST">
					<input type="hidden" name="email" id="email" value="<?php echo $email; ?>">
					<fieldset>
						<legend>IMPACTO DE SUS ESTUDIOS</legend>
						
						<div class="row">
							<div class="columns3">
								<label>42. Considera que sus estudios de posgrado le ayudaron a : <small>requerido</small></label>
								<table>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_1" value="1" /></td>
										<td><label for="pre42_1">Contar con  conocimientos  más amplios y a desarrollar  habilidades para poder realizar mejor su trabajo profesional.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_2" value="2" /></td>
										<td><label for="pre42_2">Adquirir un amplio conocimiento de su área de especialidad para  participar en el desarrollo innovador, en el análisis, y en la adaptación e incorporación a la práctica de los avances del área en cuestión o de aspectos específicos del ejercicio profesional</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_3" value="3" /></td>
										<td><label for="pre42_3">Adquirir herramientas metodológicas y técnicas en vigor para el desarrollo de actividades académicas de alto nivel.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_4" value="4" /></td>
										<td><label for="pre42_4">Adquirir herramientas metodológicas y técnicas en vigor para el desarrollo de actividades profesionales.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_5" value="5" /></td>
										<td><label for="pre42_5">Emprender un negocio.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_6" value="6" /></td>
										<td><label for="pre42_6">Adquirir un mejor desarrollo en el área empresarial.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_7" value="7" /></td>
										<td><label for="pre42_7">Obtener un mejor nivel jerárquico en el trabajo.</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre42[]" id="pre42_8" value="8" /></td>
										<td><label for="pre42_8">Obtener un mejor sueldo.</label></td>
									</tr>
								</table>
								
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>43. Considera que sus principales aportes a la sociedad hasta ahora ha sido: <small>requerido</small></label>
								<table>
									<tr>
										<td><input type="checkbox" name="pre43[]" id="pre43_1" value="1" /></td>
										<td><label for="pre43_1">Ser competente profesionalmente</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre43[]" id="pre43_2" value="2" /></td>
										<td><label for="pre43_2">Generar empleos para el país</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre43[]" id="pre43_3" value="3" /></td>
										<td><label for="pre43_3">Contribuir al desarrollo científico, tecnológico, cultural y/o artístico</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre43[]" id="pre43_4" value="4" /></td>
										<td><label for="pre43_4">Ser un ciudadano responsable y honesto</label></td>
									</tr>
									<tr>
										<td><input type="checkbox" name="pre43[]" id="pre43_5" value="5" /></td>
										<td><label for="pre43_5">Ejercer un liderazgo político comprometido con las causas justas</label></td>
									</tr>
								</table>
								
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>PRODUCTIVIDAD</legend>
						
						<div class="row">
							<div class="columns3">
								<label>44. ¿Has hecho algunas aportaciones al desarrollo del conocimiento, en las organizaciones? <small>requerido</small></label>

								<label><input type="radio" name="pre44" id="pre44" value="1" required />Proponer mejoras a la organización</label>
								<label><input type="radio" name="pre44" id="pre44" value="2" required />Incrementar el nivel de productividad y eficiencia en la organización</label>
								<label><input type="radio" name="pre44" id="pre44" value="3" required />Otros:</label>
									<input type="text" name="pre440" id="pre440" placeholder="Especifique otro">
								<label><input type="radio" name="pre44" id="pre44" value="4" required />No</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>45. Describa en qué consiste o consisten sus aportaciones, el año y el país donde las realizó (máximo tres): <small>requerido</small></label>

								<textarea name="pre45" id="pre45" required></textarea>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>46. ¿Para qué empresa o institución trabaja o trabajaba cuando la(s) realizó?</small></label>

								<label><input type="radio" name="pre46" id="pre46" value="1" required />Instituciones públicas de educación superior</label>
								<label><input type="radio" name="pre46" id="pre46" value="2" required />Instituciones privadas de educación superior</label>
								<label><input type="radio" name="pre46" id="pre46" value="3" required />Negocio propio</label>
								<label><input type="radio" name="pre46" id="pre46" value="4" required />Empresas paraestatales</label>
								<label><input type="radio" name="pre46" id="pre46" value="5" required />Sector social (cooperativas, ejidos, sindicatos, etc.).</label>
								<label><input type="radio" name="pre46" id="pre46" value="6" required />Organizaciones no gubernamentales ni lucrativas</label>
								<label><input type="radio" name="pre46" id="pre46" value="7" required />Instituciones públicas dedicadas principalmente a la investigación</label>
								<label><input type="radio" name="pre46" id="pre46" value="8" required />Instituciones privadas dedicadas principalmente a la investigación</label>
								<label><input type="radio" name="pre46" id="pre46" value="9" required />Instituciones dedicadas principalmente a la consultoría y a la prestación de servicios afines</label>
								<label><input type="radio" name="pre46" id="pre46" value="10" required />Otras empresas o instituciones del sector público</label>
								<label><input type="radio" name="pre46" id="pre46" value="11" required />Otras empresas o instituciones del sector privado</label>
								<label><input type="radio" name="pre46" id="pre46" value="0" required />No aplica</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>47. ¿Qué opción usarte para obtener el grado? <small>requerido</small></label>

								<label><input type="radio" name="pre47" id="pre47" value="1" required />Plan de negocios</label>
								<label><input type="radio" name="pre47" id="pre47" value="2" required />Estudio de caso</label>
								<label><input type="radio" name="pre47" id="pre47" value="3" required />Tesis</label>
							</div>
						</div>
						<div id="pre47si">
							<div class="row">
								<div class="columns3">
									<label>¿Se llevó a cabo el proyecto de plan de negocios? <small>requerido</small></label>

									<label><input type="radio" name="pre47_por" id="pre47_por" value="1" />Si</label>
									<label><input type="radio" name="pre47_por" id="pre47_por" value="2" />No</label>
									<input type="text" name="pre47_por0" id="pre47_por0" placeholder="Indicar por que..." />
								</div>
							</div>
							<div class="row">
								<div class="columns3">
									<label>¿Obtuviste financiamiento? <small>requerido</small></label>

									<label><input type="radio" name="pre47_obt" id="pre47_obt" value="1" />Si</label>
									<label><input type="radio" name="pre47_obt" id="pre47_obt" value="2" />No</label>
									<input type="text" name="pre47_obt0" id="pre47_obt0" placeholder="Indicar por que..." />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>48. ¿Volvería a estudiar en la UABC? <small>requerido</small></label>

								<label><input type="radio" name="pre48" id="pre48" value="1" required />Si</label>
								<label><input type="radio" name="pre48" id="pre48" value="0" required />No</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>49. Indique algunas acciones que sugiere deberían llevarse a cabo para mejorar el programa de posgrado <small>requerido</small></label>

								<textarea name="pre49" id="pre49" required></textarea>
							</div>
						</div>
					</fieldset>
					<div class="botones">
						<input type="submit" class="btn" value="Siguiente >>">
					</div>
				</form>
			</div>
			
		</section>
		<!-- Footer -->
		<footer>
			<p>Universidad Autónoma de Baja California | Maestria en Administración - Copyright 2019 ©</p>
		</footer>
	</body>
</html>
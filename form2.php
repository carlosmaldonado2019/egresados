<?php  
	error_reporting(E_ALL ^ E_NOTICE);

	$email=$_GET['email'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/form.css">
		<title>Maestria en Administración </title>
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
		<script type="text/javascript" src="js/otro.js"></script>
		<script type="text/javascript" src="js/hidders.js"></script>
		<script type="text/javascript" src="js/disablers.js"></script>
		<link rel="shortcut icon" href="img/favicon_logo.png">
		<script type="text/javascript">
			$(document).ready(function() {
				$( ".contenido" ).hide();
				$( ".contenido" ).fadeIn(1000);
			});
			if(history.forward(1)){
				history.replace(history.forward(1));
			}
		</script>
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
				<form action="save2.php" method="POST">
					<fieldset>
						<legend>DATOS DE POSGRADO</legend>
						<div class="row">
					    	<div class="columns2">

					    		<label>Programa de posgrado que cursó: <small>requerido</small></label>
					    		<select name="posgrado" id="posgrado" required>

						    		<option value="">-- Selecciona --</option>
						    		<option value="1.1">Maestría en Administración (PNPC) ¬Mexicali</option>
						    		<option value="1.2">Maestría en Administración (PNPC) ¬Ensenada</option>
						    		<option value="1.3.1">Maestría en Administración (PNPC) ¬Tijuana ¬Facultad de Turismo y Mercadotecnia</option>
						    		<option value="1.3.1">Maestría en Administración (PNPC) ¬Tijuana ¬Facultad de Ciencias Adminitrativas</option>

					    		</select>

					    		<input type="hidden" name="email" id="email" value="<?php echo $email; ?>">
					    	</div>
					    </div>
					    <div class="row">
					    	<div class="columns">
					    		<label>6. ¿Está usted titulado? <small>requerido</small></label>
								<label><input type="radio" name="pre6" id="pre6" value="1" required>Si</label>
								<label><input type="radio" name="pre6" id="pre6" value="0" required>No</label>
					    	</div>
						</div>
						<div id="pre6si">
							<div class="row">
								<div class="columns2">

									<label>7. ¿En que año se tituló? <small> requerido</small></label>
									<select name="pre7" id="pre7" >

							    		<option value="">-- Selecciona --</option>
							    		<option value="-2000">Antes del 2000</option>
							    		<option value="2000">2000</option>
							    		<option value="2001">2001</option>
							    		<option value="2002">2002</option>
							    		<option value="2003">2003</option>
							    		<option value="2004">2004</option>
							    		<option value="2005">2005</option>
							    		<option value="2006">2006</option>
							    		<option value="2007">2007</option>
							    		<option value="2008">2008</option>
							    		<option value="2009">2009</option>
							    		<option value="2010">2010</option>
							    		<option value="2011">2011</option>
							    		<option value="2012">2012</option>
							    		<option value="2013">2013</option>
							    		<option value="2014">2014</option>
							    		<option value="2015">2015</option>
							    		<option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
							    		<option value="No" hidden>No</option>

						    		</select>

						    	</div>

						    </div>
						    <div class="row">

						    	<div class="columns3">

						    		<label>8. ¿En la realización de su proyecto de titulación ¿se integraron y aplicaron los conocimientos adquiridos durante su formación? <small>requerido</small></label>
									<select name="pre8" id="pre8" >

							    		<option value="">-- Selecciona --</option>
							    		<option >Mucho</option>
							    		<option >Nada</option>
							    		<option >Regular</option>
							    		<option >Poco</option>

							    	</select>
						    	</div>

							</div>
						</div>
						<div id="pre6no">
						    <div class="row">
						    	<div class="columns3">
						    		<label>9. ¿Por qué no se ha titulado?<small>requerido</small></label>

									<label><input type="radio" name="pre9" id="pre91" value="1" > Necesidad de trabajar </label>
									<label><input type="radio" name="pre9" id="pre92" value="2" > Motivos personales (matrimonio, viajes, enfermedad)</label>
									<label><input type="radio" name="pre9" id="pre93" value="3" > El asesor de tesis no maneja el tema de la tesis</label>
									<label><input type="radio" name="pre9" id="pre94" value="4" > El asesor de tesis no tiene amplios conocimientos en métodos y técnicas de investigación</label>
									<label><input type="radio" name="pre9" id="pre95" value="5" > El asesor de tesis no dedica el tiempo suficiente a la revisión y asesoría de la tesis</label>
									<label><input type="radio" name="pre9" id="pre96" value="6" > Insatisfacción personal con la temática de investigación</label>
									<label><input type="radio" name="pre9" id="pre97" value="7" > Problemas personales con el asesor de tesis</label>
									<label><input type="radio" name="pre9" id="pre98" value="8" > Falta de recursos (económicos, técnicos y/o materiales)</label>
									<label><input type="radio" name="pre9" id="pre99" value="9" > Indecisión acerca del tema(s) por investigar</label>
									<label><input type="radio" name="pre9" id="pre910" value="10" > No contó con la tutoría académica adecuada</label>
									<label><input type="radio" name="pre9" id="pre911" value="11" > Falta de motivación</label>
									<label><input type="radio" name="pre9" id="pre912" value="12" > No aplica</label>
									<label><input type="radio" name="pre9" id="pre913" value="13" > Otro</label>
									<input type="text" name="pre90" id="pre90" placeholder="Especifique otro">
						    	</div>
							</div>
						    <div class="row">
						    	<div class="columns3">
						    		<label>10. ¿Qué tan importante considera titularse?<small>requerido</small></label>

									<label><input type="radio" name="pre10" id="pre101" value="1" > Extremadamente importante</label>
									<label><input type="radio" name="pre10" id="pre102" value="2" > Muy importante</label>
									<label><input type="radio" name="pre10" id="pre103" value="3" > Importante</label>
									<label><input type="radio" name="pre10" id="pre104" value="4" > Algo importante</label>
									<label><input type="radio" name="pre10" id="pre105" value="5" > Poco importante</label> 
						    	</div>
							</div>
						    <div class="row">
						    	<div class="columns3">
						    		<label>11. ¿Conoce usted las opciones de titulación que existen en la UABC para el posgrado?<small>requerido</small></label>

									<label><input type="radio" name="pre11" id="pre111" value="1" > Si</label>
									<label><input type="radio" name="pre11" id="pre112" value="0" > No</label>
						    	</div>
							</div>
						</div>
					    <div class="row">
					    	<div class="columns3">
					    		<label>12. ¿En cuantos años cursó sus estudios de posgrado?<small>requerido</small></label>

								<label><input type="radio" name="pre12" id="pre121" value="1" required> En dos años</label>
								<label><input type="radio" name="pre12" id="pre122" value="2" required> En tres años</label>
								<label><input type="radio" name="pre12" id="pre123" value="3" required> En cuatro años</label>
								<label><input type="radio" name="pre12" id="pre124" value="4" required> En cinco años</label>
								<label><input type="radio" name="pre12" id="pre125" value="5" required> En seis años</label>
								<label><input type="radio" name="pre12" id="pre126" value="6" required> En siete o más</label>													 
					    	</div>
						</div>
					    <div class="row">
					    	<div class="columns3">
					    		<label>13. ¿Cuál fue el promedio general de estudios?<small>requerido</small></label>

								<label><input type="radio" name="pre13" id="pre131" value="1" required> Menos de setenta o setenta</label>
								<label><input type="radio" name="pre13" id="pre132" value="2" required> De 71 a 75</label>
								<label><input type="radio" name="pre13" id="pre133" value="3" required> De 76 a 80</label>
								<label><input type="radio" name="pre13" id="pre134" value="4" required> De 81 a 90</label>
								<label><input type="radio" name="pre13" id="pre135" value="5" required> De 91 a 95</label>
								<label><input type="radio" name="pre13" id="pre136" value="6" required> De 96 a 99</label>
								<label><input type="radio" name="pre13" id="pre137" value="7" required> Cien</label>
					    	</div>
						</div>
					    <div class="row">
					    	<div class="columns2">
					    		<label>14. ¿Realizó usted otros estudios de posgrado? <small>requerido</small></label>

								<label><input type="radio" name="pre14" id="pre14" value="1" required>Si</label>
								<label><input type="radio" name="pre14" id="pre14" value="0" required>No</label>
					    	</div>
						</div>
						<div id="pre14si">
							<div class="row">

								<div class="columns2">
									<label>¿En que área? <small>requerido</small></label>
									<label><input type="radio" name="pre14_area" id="pre14_area1" value="1" > Físico, Matemáticas y Ciencias de la TierraSi </label>
									<label><input type="radio" name="pre14_area" id="pre14_area2" value="2" > Biología y Química</label>
									<label><input type="radio" name="pre14_area" id="pre14_area3" value="3" > Medicina y Ciencias de la Salud</label>
									<label><input type="radio" name="pre14_area" id="pre14_area4" value="4" > Humanidades y Ciencias de la Conducta</label>
									<label><input type="radio" name="pre14_area" id="pre14_area5" value="5" > Ciencias Sociales</label>
									<label><input type="radio" name="pre14_area" id="pre14_area6" value="6" > Biotecnología y Ciencias Agropecuarias</label>
									<label><input type="radio" name="pre14_area" id="pre14_area7" value="7" > Ingenierías</label>
									<label><input type="radio" name="pre14_area" id="pre14_area8" value="8" > Otro</label>
										<input type="text" name="pre14_area0" id="pre14_area0" placeholder="Especifique otro">
						    	</div>
						    </div>
						    <div class="row">

						    	<div class="columns2">

						    		<label>¿En que institución?<small>requerido</small>
						    			<input type="text" name="pre14_inst" id="pre14_inst" placeholder="Proporcione">
						    		</label>
						    	</div>
							</div>
						    <div class="row">

						    	<div class="columns2">

						    		<label>¿Cuales?<small>requerido</small>
						    			<input type="text" name="pre14_cual" id="pre14_cual" placeholder="Proporcione">
						    		</label>
						    	</div>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>15. ¿Siendo estudiante trabajó en actividades relacionadas con su posgrado? <small>requerido</small></label>

								<label><input type="radio" name="pre15" id="pre15" value="1" required>Si</label>
								<label><input type="radio" name="pre15" id="pre15" value="0" required>No</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>16. Durante la mayor parte de sus estudios de posgrado su dedicación a los estudios, fue: <small>requerido</small></label>

								<label><input type="radio" name="pre16" id="pre16" value="1" required>Tiempo completo (Su única ocupación era estudiar)</label>
								<label><input type="radio" name="pre16" id="pre16" value="2" required>Medio tiempo (Estudiaba y trabajaba)</label>
								<label><input type="radio" name="pre16" id="pre16" value="3" required>Tiempo Parcial (Trabajaba la mayor parte del tiempo)</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>17. ¿Durante sus estudios de posgrado ¿cuál fue su principal sostén económico? <small>requerido</small></label>

								<label><input type="radio" name="pre17" id="pre17" value="1" >Usted mismo</label>
								<label><input type="radio" name="pre17" id="pre17" value="2" >Padres</label>
								<label><input type="radio" name="pre17" id="pre17" value="3" >Beca</label>
									<select name="pre17_beca" id="pre17_beca" >

							    		<option value="">-- Selecciona --</option>
							    		<option value="Beca director">Beca director</option>
							    		<option value="Conacyt">Conacyt</option>
							    		<option value="Sindicato">Sindicato</option>
							    		<option value="Beca Merito">Beca Merito</option>
							    		<option value="Beca Merito">Beca Sindicato</option>
							    		<option value="No" hidden>No</option>

						    		</select>
								<label><input type="radio" name="pre17" id="pre17" value="4" >Esposo (a)</label>
								<label><input type="radio" name="pre17" id="pre17" value="5" >Usted y su Pareja</label>
								<label><input type="radio" name="pre17" id="pre17" value="6" >Otro</label>
									<input type="text" name="pre170" id="pre170" placeholder="Especifique otro">
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>18. ¿Su trabajo actual está relacionado con sus estudios de posgrado? <small>requerido</small></label>

								<label><input type="radio" name="pre18" id="pre18" value="1" required>Si</label>
								<label><input type="radio" name="pre18" id="pre18" value="0" required>No</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>19. En caso de no haber trabajado durante sus estudios ¿cuánto tiempo tardó en conseguir trabajo al salir de la UABC? <small>requerido</small></label>
								<select name="pre19" id="pre19" required>

									<option value="">-- Selecciona --</option>
									<option>Ya contaba con trabajo</option>
									<option>Menos de un mes</option>
									<option>Un mes</option>
									<option>Dos meses</option>
									<option>Tres meses</option>
									<option>Cuatro meses</option>
									<option>Cinco meses</option>
									<option>Seis meses</option>
									<option>Siete meses</option>
									<option>Ocho meses</option>
									<option>Nueve meses</option>
									<option>Diez meses</option>
									<option>Once meses</option>
									<option>Doce meses</option>
									<option>24 meses</option>
									<option>36 meses</option>
									<option>mas de 36 meses</option>

								</select>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>20. ¿El posgrado le ayudó a mejorar sus ingresos? <small>requerido</small></label>

								<label><input type="radio" name="pre20" id="pre20" value="mejoró" required>Mejoró</label>
								<label><input type="radio" name="pre20" id="pre20" value="está igual" required>Está igual</label>
								<label><input type="radio" name="pre20" id="pre20" value="empeoró" required>Empeoró</label>
								<label><input type="radio" name="pre20" id="pre20" value="no aplica" required>No aplica</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>21. Considera que su formación en el posgrado, fue: <small>requerido</small></label>

								<label><input type="radio" name="pre21" id="pre21" value="excelente" required>Excelente</label>
								<label><input type="radio" name="pre21" id="pre21" value="buena" required>Buena</label>
								<label><input type="radio" name="pre21" id="pre21" value="deficiente" required>Deficiente</label>
								<label><input type="radio" name="pre21" id="pre21" value="mala" required>Mala</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>22. Considera que el posgrado que estudió tuvo una orientación: <small>requerido</small></label>

								<label><input type="radio" name="pre22" id="pre22" value="1" required>Hacia la investigación</label>
								<label><input type="radio" name="pre22" id="pre22" value="2" required>Hacia la profesionalización</label>
								<label><input type="radio" name="pre22" id="pre22" value="3" required>Hacia el perfeccionamiento personal</label>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>23. ¿Qué puesto tiene actualmente? <small>requerido</small></label>
								<select name="pre23" id="pre23" required>

									<option value="">-- Selecciona --</option>
									<option>Académico</option>
									<option>Director General</option>
									<option>Director de área</option>
									<option>Gerente o Jefe de Departamento</option>
									<option>Supervisor de trabajos manuales</option>
									<option>Supervisor de trabajos no manuales</option>
									<option>Puesto académico</option>
									<option>Vendedor</option>
									<option>Asistente</option>
									<option>Consultor</option>
									<option>Dueño o socio</option>
									<option>Empleado</option>
									<option>Por su cuenta</option>
									<option>No trabaja</option>
									<option>Ama de casa</option>
									<option>Analista</option>
									<option>Asesor</option>
									<option>Coordinador</option>
									<option>Desempleado</option>
									<option>Otro</option>

								</select>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>24-A. Por favor, evalúe los siguientes aspectos de su programa de posgrado</label>
								<table>
									<tr>
										<td></td>
										<td style="padding-right:10px;"><label>Excelente</label></td>
										<td style="padding-right:10px;"><label>Bueno</label></td>
										<td style="padding-right:10px;"><label>Deficiente</label></td>
										<td><label>Malo</label></td>
									</tr>
									<tr>
										<td><label>El nivel académico</label></td>
										<td><input type="radio" name="pre24_1" id="pre24_1" value="Excelente" required></td>
										<td><input type="radio" name="pre24_1" id="pre24_1" value="Bueno" required></td>
										<td><input type="radio" name="pre24_1" id="pre24_1" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_1" id="pre24_1" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>La reputación académica</label></td>
										<td><input type="radio" name="pre24_2" id="pre24_2" value="Excelente" required></td>
										<td><input type="radio" name="pre24_2" id="pre24_2" value="Bueno" required></td>
										<td><input type="radio" name="pre24_2" id="pre24_2" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_2" id="pre24_2" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>La administración del programa </label></td>
										<td><input type="radio" name="pre24_3" id="pre24_3" value="Excelente" required></td>
										<td><input type="radio" name="pre24_3" id="pre24_3" value="Bueno" required></td>
										<td><input type="radio" name="pre24_3" id="pre24_3" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_3" id="pre24_3" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>Los recursos para la investigación</label></td>
										<td><input type="radio" name="pre24_4" id="pre24_4" value="Excelente" required></td>
										<td><input type="radio" name="pre24_4" id="pre24_4" value="Bueno" required></td>
										<td><input type="radio" name="pre24_4" id="pre24_4" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_4" id="pre24_4" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>La biblioteca</label></td>
										<td><input type="radio" name="pre24_5" id="pre24_5" value="Excelente" required></td>
										<td><input type="radio" name="pre24_5" id="pre24_5" value="Bueno" required></td>
										<td><input type="radio" name="pre24_5" id="pre24_5" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_5" id="pre24_5" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>Los laboratorios (sí corresponde) </label></td>
										<td><input type="radio" name="pre24_6" id="pre24_6" value="Excelente"></td>
										<td><input type="radio" name="pre24_6" id="pre24_6" value="Bueno"></td>
										<td><input type="radio" name="pre24_6" id="pre24_6" value="Deficiente"></td>
										<td><input type="radio" name="pre24_6" id="pre24_6" value="Malo"></td>
									</tr>
									<tr>
										<td><label>El acceso a equipo de cómputo</label></td>
										<td><input type="radio" name="pre24_7" id="pre24_7" value="Excelente" required></td>
										<td><input type="radio" name="pre24_7" id="pre24_7" value="Bueno" required></td>
										<td><input type="radio" name="pre24_7" id="pre24_7" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_7" id="pre24_7" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>Las instalaciones de la universidad </label></td>
										<td><input type="radio" name="pre24_8" id="pre24_8" value="Excelente" required></td>
										<td><input type="radio" name="pre24_8" id="pre24_8" value="Bueno" required></td>
										<td><input type="radio" name="pre24_8" id="pre24_8" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_8" id="pre24_8" value="Malo" required></td>
									</tr>
									<tr>
										<td><label>Otro</label></td>
										<td><input type="radio" name="pre24_9" id="pre24_9" value="Excelente" required></td>
										<td><input type="radio" name="pre24_9" id="pre24_9" value="Bueno" required></td>
										<td><input type="radio" name="pre24_9" id="pre24_9" value="Deficiente" required></td>
										<td><input type="radio" name="pre24_9" id="pre24_9" value="Malo" required></td>
									</tr>
								</table>
							</div>
					    </div>
						<div class="row">
							<div class="columns3">
								<label>24-B. ¿Cuál es su opinión acerca de la infraestructura de acuerdo a los espacios que se utilizan?</label>
								<table>
									<tr>
										<td>Espacios</td>
										<td style="padding-right:10px;"><label>Buena</label></td>
										<td style="padding-right:10px;"><label>Regular</label></td>
										<td><label>Mala</label></td>
									</tr>
									<tr>
										<td><label>Aulas</label></td>
										<td><input type="radio" name="pre24b_1" id="pre24b_1" value="Buena" required></td>
										<td><input type="radio" name="pre24b_1" id="pre24b_1" value="Regular" required></td>
										<td><input type="radio" name="pre24b_1" id="pre24b_1" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Laboratorios</label></td>
										<td><input type="radio" name="pre24b_2" id="pre24b_2" value="Buena" required></td>
										<td><input type="radio" name="pre24b_2" id="pre24b_2" value="Regular" required></td>
										<td><input type="radio" name="pre24b_2" id="pre24b_2" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Sala audiovisual</label></td>
										<td><input type="radio" name="pre24b_3" id="pre24b_3" value="Buena" required></td>
										<td><input type="radio" name="pre24b_3" id="pre24b_3" value="Regular" required></td>
										<td><input type="radio" name="pre24b_3" id="pre24b_3" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Estacionamientos</label></td>
										<td><input type="radio" name="pre24b_4" id="pre24b_4" value="Buena" required></td>
										<td><input type="radio" name="pre24b_4" id="pre24b_4" value="Regular" required></td>
										<td><input type="radio" name="pre24b_4" id="pre24b_4" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Computadoras</label></td>
										<td><input type="radio" name="pre24b_5" id="pre24b_5" value="Buena" required></td>
										<td><input type="radio" name="pre24b_5" id="pre24b_5" value="Regular" required></td>
										<td><input type="radio" name="pre24b_5" id="pre24b_5" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Velocidad del internet</label></td>
										<td><input type="radio" name="pre24b_6" id="pre24b_6" value="Buena" required></td>
										<td><input type="radio" name="pre24b_6" id="pre24b_6" value="Regular" required></td>
										<td><input type="radio" name="pre24b_6" id="pre24b_6" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Limpieza general de la institución</label></td>
										<td><input type="radio" name="pre24b_7" id="pre24b_7" value="Buena" required></td>
										<td><input type="radio" name="pre24b_7" id="pre24b_7" value="Regular" required></td>
										<td><input type="radio" name="pre24b_7" id="pre24b_7" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Biblioteca</label></td>
										<td><input type="radio" name="pre24b_8" id="pre24b_8" value="Buena" required></td>
										<td><input type="radio" name="pre24b_8" id="pre24b_8" value="Regular" required></td>
										<td><input type="radio" name="pre24b_8" id="pre24b_8" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Accesos de discapacitados</label></td>
										<td><input type="radio" name="pre24b_9" id="pre24b_9" value="Buena" required></td>
										<td><input type="radio" name="pre24b_9" id="pre24b_9" value="Regular" required></td>
										<td><input type="radio" name="pre24b_9" id="pre24b_9" value="Mala" required></td>
									</tr>
									<tr>
										<td><label>Seguridad</label></td>
										<td><input type="radio" name="pre24b_10" id="pre24b_10" value="Buena" required></td>
										<td><input type="radio" name="pre24b_10" id="pre24b_10" value="Regular" required></td>
										<td><input type="radio" name="pre24b_10" id="pre24b_10" value="Mala" required></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>25. Indique cuales fueron los motivos que tuvo para elegir la institución donde realizó sus estudios de posgrado: <small>requerido</small></label>
								<table>
									<tr>
										<td colspan="6"></td>
										<td style="padding-right:10px;"><label>Primero</label></td>
										<td style="padding-right:10px;"><label>Segundo</label></td>
										<td style="padding-right:10px;"><label>Tercero</label></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>Su nivel académico</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_11"  value="1" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_21"  value="1" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_31"  value="1" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>La infraestructura (biblioteca, laboratorios, etc.)</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_12"  value="2" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_22"  value="2" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_32"  value="2" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>El costo de la colegiatura</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_13"  value="3" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_23"  value="3" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_33"  value="3" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>El prestigio de la institución</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_14"  value="4" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_24"  value="4" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_34"  value="4" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>El horario de clases</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_15"  value="5" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_25"  value="5" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_35"  value="5" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>La ubicación con respecto a su casa y/o su lugar de trabajo</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_16"  value="6" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_26"  value="6" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_36"  value="6" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>Por la facilidad para ingresar</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_17"  value="7" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_27"  value="7" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_37"  value="7" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>El compromiso social de la institución</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_18"  value="8" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_28"  value="8" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_38"  value="8" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>Por recomendación de amigos y/o parientes</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_19"  value="9" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_29"  value="9" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_39"  value="9" required></td>
									</tr>
									<tr>
										<td colspan="6" align="left"><label>Por becas y apoyos</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_110" value="10" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_210" value="10" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_310" value="10" required></td>
									</tr>
									<tr class="otro">
										<td align="left" colspan="6"><label>Otro:</label></td>
										<td><input type="radio" name="pre25_1" id="pre25_111" value="11" required></td>
										<td><input type="radio" name="pre25_2" id="pre25_211" value="11" required></td>
										<td><input type="radio" name="pre25_3" id="pre25_311" value="11" required></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="columns3">
								<label>26. Considera usted que los mecanismos de admisión fueron: <small>requerido</small></label>

								<label><input type="radio" name="pre26" id="pre26" value="1" required>Muy efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="2" required>Efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="3" required>Poco efectivos</label>
								<label><input type="radio" name="pre26" id="pre26" value="4" required>Deficientes</label>
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
			<p>Universidad Autónoma de Baja California | Maestria en Administración   - Copyright 2019 ©</p>
		</footer>
	</body>
</html>
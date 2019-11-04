<?php
	include("conex.php");

	$cadena = "";
	$md5	= "";

	// ********************************************************************************** //
	// **************************** Primera prueba ************************************** //
	// ********************************************************************************** //
	/* Se escribiran las letras del abecedario en la tabla y se encriptaran mediante md5  

	$cadena = "a";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "A";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "b";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "B";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "c";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "C";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "d";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "D";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "e";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "E";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "f";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "F";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "g";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "G";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "h";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "H";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "i";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "I";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "j";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "J";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "k";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "K";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "l";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "L";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "m";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "M";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "n";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "N";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "o";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "O";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "p";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "P";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "q";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "Q";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "r";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "R";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "s";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "S";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "t";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "T";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "u";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "U";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "v";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "V";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "w";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "W";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "x";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "X";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "y";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "y";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "z";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "Z";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	*/
	// ********************************************************************************** //

	// ********************************************************************************** //
	// **************************** Segunda prueba ************************************** //
	// ********************************************************************************** //
	/* Se escribiran con silabas y una plabra en la tabla y se encriptaran mediante md5   

	$cadena = "aa";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "ee";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "ii";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "oo";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "uu";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "ab";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "ba";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "bc";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	$cadena = "perro";
	$md5	= md5($cadena);
	mysql_query("INSERT INTO seguridad(cadena,md5) VALUES ('$cadena','$md5')");
	*/
	// ********************************************************************************** //

?>
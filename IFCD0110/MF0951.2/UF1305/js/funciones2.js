

//Método isFinite()
function esFinito() {
   var res = "";
   res = res + "¿123 es finito? " + "<strong>" + isFinite(123) + "</strong><br>";
   res = res + "¿-123 es finito? " + "<strong>" + isFinite(-123) + "</strong><br>";
   res = res + "¿1.23 es finito? " + "<strong>" + isFinite(1.23) + "</strong><br>";
   res = res + "¿-1.23 es finito? " + "<strong>" + isFinite(-1.23) + "</strong><br>";
   res = res + "¿123-12 es finito? " + "<strong>" + isFinite(123-12) + "</strong><br>";
   res = res + "¿123 (texto) es finito? " + "<strong>" + isFinite("123") + "</strong><br>";
   res = res + "¿Cientoveintitrés es finito? " + "<strong>" + isFinite("Cientoveintitrés") + "</strong><br>";
   res = res + "¿0/0 es finito? " + "<strong>" + isFinite(0/0) + "</strong><br>";
   res = res + "¿123-123 (texto) es finito? " + "<strong>" + isFinite(123-"123") + "</strong><br>";

document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML = 

"<p>El método isFinite() determina si un valor es un número finito. Este método devuelve verdadero si el valor del número es equivale a un número finito, de lo contrario, devuelve falso.</p>" +
"<p>El método isFinite() es diferente a la función global isFinite(). La función global isFinite() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método isFinite() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo  Ambas funciones al ejecutarse devuelven un valor booleano, true (verdadero) o false (falso).</p>";
}

//Método isInteger()
function esEntero() {
	var res = "";
	res = res + "¿123 es entero? " + "<strong>" + isInteger(123) + "</strong><br>";
	res = res + "¿-123 es entero? " + "<strong>" + isInteger(-123) + "</strong><br>";
	res = res + "¿1.23 es entero? " + "<strong>" + isInteger(1.23) + "</strong><br>";
	res = res + "¿-1.23 es entero? " + "<strong>" + isInteger(-1.23) + "</strong><br>";
	res = res + "¿123-12 es entero? " + "<strong>" + isInteger(123-12) + "</strong><br>";
	res = res + "¿123 (texto) es entero? " + "<strong>" + isInteger("123") + "</strong><br>";
	res = res + "¿Cientoveintitrés es entero? " + "<strong>" + isInteger("Cientoveintitrés") + "</strong><br>";
	res = res + "¿0/0 es entero? " + "<strong>" + isInteger(0/0) + "</strong><br>";
	res = res + "¿123-123 (texto) es entero? " + "<strong>" + isInteger(123-"123") + "</strong><br>";

document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML = 	

"<p>El método isInteger() determina si un valor es un número entero. Este método devuelve verdadero si el valor del número es equivale a un número entero, de lo contrario, devuelve falso.</p>" +
"<p>El método isInteger() es diferente a la función global ). La función global ) convierte el argumento objeto a un número que representa el valor del objeto. El método isInteger() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo  El método isInteger() devuelve un valor booleano, true o false. Si el valor es NaN o infinito, devuelve false.</p>";
}

//Método isNaN()
function noEsNumero() {
	var res = "";
	res = res + "¿123 es NaN? " + "<strong>" + isNaN(123) + "</strong><br>";
	res = res + "¿-123 es NaN? " + "<strong>" + isNaN(-123) + "</strong><br>";
	res = res + "¿1.23 es NaN? " + "<strong>" + isNaN(1.23) + "</strong><br>";
	res = res + "¿-1.23 es NaN? " + "<strong>" + isNaN(-1.23) + "</strong><br>";
	res = res + "¿123-12 es NaN? " + "<strong>" + isNaN(123-12) + "</strong><br>";
	res = res + "¿123 (texto) es NaN? " + "<strong>" + isNaN("123") + "</strong><br>";
	res = res + "¿Cientoveintitrés es NaN? " + "<strong>" + isNaN("Cientoveintitrés") + "</strong><br>";
	res = res + "¿0/0 es NaN? " + "<strong>" + isNaN(0/0) + "</strong><br>";
	res = res + "¿123-123 (texto) es NaN? " + "<strong>" + isNaN(123-"123") + "</strong><br>";
	
document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML = 

"<p>El método isNaN() determina si un valor es NaN (No-A-. Este método devuelve verdadero si el valor no es equivale a un número, de lo contrario, devuelve falso.</p>" +
"<p>El método isNaN() es diferente a la función global isNaN(). La función global isNaN() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método isNaN() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo  El valor NaN es considerado como un tipo de número.</p>";
}



//Método toExponential(x)
function aExponencial() {
	var res = "";
	res = res + "(123).toExponential(1) " + "<strong>" + (123).toExponential(1) + "</strong><br>";
	res = res + "(123).toExponential(2) " + "<strong>" + (123).toExponential(2) + "</strong><br>";
	res = res + "(123).toExponential(3) " + "<strong>" + (123).toExponential(3) + "</strong><br>";
	res = res + "(123).toExponential(4) " + "<strong>" + (123).toExponential(4) + "</strong><br>";
	res = res + "(123).toExponential(5) " + "<strong>" + (123).toExponential(5) + "</strong><br>";
	res = res + "(123).toExponential(6) " + "<strong>" + (123).toExponential(6) + "</strong><br>";

document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML = 

"<p>El método number.toExponential(x) convierte un número en exponencial. Este método devuelve una cadena (string) que representa el objeto de tipo en notación exponencial.</p>" +
"<p>Como opcional, se puede indicar dentro del paréntesis de la función toExponential() el número de dígitos que se utilizarán para representar el número en exponencial, los número van del 0 al 20." +
"Si no se especifica nungún valor dentro del paréntesis se utilizaran por defecto tantos dígitos decimales como hagan falta para acomodar el número.</p>";
}

//Método toFixed(x)
function aFijar() {
	var res = "";
	res = res + "(123).toFixed(1) " + "<strong>" + (123).toFixed(1) + "</strong><br>";
	res = res + "(123).toFixed(2) " + "<strong>" + (123).toFixed(2) + "</strong><br>";
	res = res + "(123).toFixed(3) " + "<strong>" + (123).toFixed(3) + "</strong><br>";
	res = res + "(123).toFixed(4) " + "<strong>" + (123).toFixed(4) + "</strong><br>";
	res = res + "(123).toFixed(5) " + "<strong>" + (123).toFixed(5) + "</strong><br>";
	res = res + "(123).toFixed(6) " + "<strong>" + (123).toFixed(6) + "</strong><br>";
	
document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML =
	
"<p>El método number.toFixed () devuelve una cadena, que representa un número, con el número exacto de decimales. Dentro del paréntesis se indica el número de dígitos que se utilizarán para representar los decimales.</p>" +
"Si el número deseado de decimales es más alto que el número real, la función toFixed(), añadirá ceros para crear la longitud deseada decimal. Si el valor de los decimales es 0 o se deja en blanco, se mostrará sólo la parte entera del número. Si el número de decimales es mayor que 1e+21, este método, simplemente, llama a la función prototype.toString() y devuelve una cadena en notación exponencial.</p>";
}

//Método .toPrecision(x)
function aPrecision() {
	var res = "";
	res = res + "¿123 es finito? " + "<strong>" + toPrecision(123) + "</strong><br>";
	res = res + "¿-123 es finito? " + "<strong>" + toPrecision(-123) + "</strong><br>";
	res = res + "¿1.23 es finito? " + "<strong>" + toPrecision(1.23) + "</strong><br>";
	res = res + "¿-1.23 es finito? " + "<strong>" + toPrecision(-1.23) + "</strong><br>";
	res = res + "¿123-12 es finito? " + "<strong>" + toPrecision(123-12) + "</strong><br>";
	res = res + "¿123 (texto) es finito? " + "<strong>" + toPrecision("123") + "</strong><br>";
	res = res + "¿Cientoveintitrés es finito? " + "<strong>" + toPrecision("Cientoveintitrés") + "</strong><br>";
	res = res + "¿0/0 es finito? " + "<strong>" + toPrecision(0/0) + "</strong><br>";
	res = res + "¿123-123 (texto) es finito? " + "<strong>" + toPrecision(123-"123") + "</strong><br>";

document.getElementById("demo2").innerHTML = res;
document.getElementById("demo1").innerHTML =
	
"<p>El método number.toPrecision(precision) devuelve una cadena que representa un objeto según la precisión especificada. Dentro del paréntesis se indica el parámetro precisión, que es el número de dígitos que se utilizarán para representar el número.</p>" +
"<p>Si el número de la precisión, es más alto que el número real, la función toPrecision(), añadirá ceros para crear la longitud deseada. Si el parámetro precision es omitido se mostrará el número tal cual. Si el parámetro precision es un valor no entero, el valor es redondeado al entero más cercano.</p>";
}
	

//Método .toString(x)
function aCadena() {
   var res = "";
   res = res + "¿123 es finito? " + "<strong>" + toString(123) + "</strong><br>";
   res = res + "¿-123 es finito? " + "<strong>" + toString(-123) + "</strong><br>";
   res = res + "¿1.23 es finito? " + "<strong>" + toString(1.23) + "</strong><br>";
   res = res + "¿-1.23 es finito? " + "<strong>" + toString(-1.23) + "</strong><br>";
   res = res + "¿123-12 es finito? " + "<strong>" + toString(123-12) + "</strong><br>";
   res = res + "¿123 (texto) es finito? " + "<strong>" + toString("123") + "</strong><br>";
   res = res + "¿Cientoveintitrés es finito? " + "<strong>" + toString("Cientoveintitrés") + "</strong><br>";
   res = res + "¿0/0 es finito? " + "<strong>" + toString(0/0) + "</strong><br>";
   res = res + "¿123-123 (texto) es finito? " + "<strong>" + toString(123-"123") + "</strong><br>";

document.getElementById("demo2").innerHTML = res; 
document.getElementById("demo1").innerHTML = 	

"<p>El método number.toString(base) convierte un número en una cadena, usando diferentes bases. Dentro del paréntesis se indica el parámetro base, que es la base de representación numérica de dígitos que se utilizará para representar el número.</p>" +
"<p>Como opcional, se puede indicar qué base utilizar para representar un valor numérico. Debe ser un número entero entre 2 y 36. Si no se especifica la base, JavaScript asume la base predefinida, que es 10, formato decimal. </p>" +
"<p>Por ejemplo, el método number.toString() representa un número en base 2 como binario, en base 8 como Octal y en base 16 como hexadecimal.</p>";
}

//Método valueOf()
function valorDe() {
	var res = "";
	res = res + "¿123 es finito? " + "<strong>" + valueOf(123) + "</strong><br>";
	res = res + "¿-123 es finito? " + "<strong>" + valueOf(-123) + "</strong><br>";
	res = res + "¿1.23 es finito? " + "<strong>" + valueOf(1.23) + "</strong><br>";
	res = res + "¿-1.23 es finito? " + "<strong>" + valueOf(-1.23) + "</strong><br>";
	res = res + "¿123-12 es finito? " + "<strong>" + valueOf(123-12) + "</strong><br>";
	res = res + "¿123 (texto) es finito? " + "<strong>" + valueOf("123") + "</strong><br>";
	res = res + "¿Cientoveintitrés es finito? " + "<strong>" + valueOf("Cientoveintitrés") + "</strong><br>";
	res = res + "¿0/0 es finito? " + "<strong>" + valueOf(0/0) + "</strong><br>";
	res = res + "¿123-123 (texto) es finito? " + "<strong>" + valueOf(123-"123") + "</strong><br>";
	
document.getElementById("demo2").innerHTML = res; 
document.getElementById("demo1").innerHTML = 
	
"<p>El método number.valueOf() devuelve el valor primitivo de una variable. Dentro del paréntesis no se indica parámetro alguno, Por delante del método se escribe el nombre del dato a evaluar. Puede ser, variable, objeto, array, string, number o función.</p>" +
"<p>Este método no cambia el valor original, sólo devuelve el valor simple de un número. Si un objeto no tiene un valor, valueOf devuelve el objeto en sí.</p>";
}


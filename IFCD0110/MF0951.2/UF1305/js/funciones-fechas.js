// JavaScript Document

// Método new Date()
function nuevaFecha() {
var fecha = new Date ();
alert ("la fecha es :" + "\n" + fecha);
}

// Método getFullYear()
function cogerAno() {
var fecha = new Date();
var ano = fecha.getFullYear();
alert ("El año actual es :" + "\n" + ano);
}

// Método getMonth()
function cogerMes() {
var fecha = new Date();
var mes = fecha.getMonth();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
alert ("El mes actual es :" + mes + "\n" + "Su nombre es " + meses[fecha.getMonth()]);
}

// Método getDate()
function cogerDia() {
var fecha = new Date();
var dia = fecha.getDate();
alert ("El día en el que estamos es: " + dia + "\n");
}

// Método getHours()
function cogerHoras() {
var fecha = new Date();
var horas = fecha.getHours();
alert ("Los minutos actuales son: " + horas);
}

// Método getHours()
function cogerMinutos() {
var fecha = new Date();
var minutos = fecha.getMinutes();
alert ("Los minutos actuales son: " + minutos);
}

// Método getSeconds()
function cogerSegundos() {
var fecha = new Date();
var segundos = fecha.getSeconds();
alert ("Los minutos actuales son: " + segundos);
}

// Método getSeconds()
function cogerSegundos() {
var fecha = new Date();
var segundos = fecha.getSeconds();
alert ("Los minutos actuales son: " + segundos);
}

// Método getSeconds()
function cogerMilisegundos() {
var fecha = new Date();
var milisegundos = fecha.getMilliseconds();
alert ("Los minutos actuales son: " + milisegundos);
}

// Método getTime()
function cogerTiempo() {
var fecha = new Date();
var tiempo = fecha.getTime();
alert ("Los minutos actuales son: " + tiempo);
}

// Método getDay()
function cogerDiaSemana() {
var fecha = new Date();
var diaSemana = fecha.getDay();
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
alert ("El día de la semana actual es: " + diaSemana + "\n" + "Su nombre es " + dias[fecha.getDay()]);
}

// Método getWeek()
function cogerSemana() {
var fecha = new Date();
var semana = fecha.getWeek();
alert ("Los minutos actuales son: " + semana);
}

/* Onload */
function Reloj() {
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    var milisegundo = fecha.getMilliseconds();
    var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
    var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

    document.getElementById("i1").innerHTML = "Año: " + anio;
    document.getElementById("i2").innerHTML = "Mes: " + (mes + 1);
    document.getElementById("i3").innerHTML = "Día: " + dia;
    document.getElementById("i4").innerHTML = "Hora: " + hora;
    document.getElementById("i5").innerHTML = "Minuto: " + minuto;
    if (segundo < 10) {segundo = "0" + segundo;}
    document.getElementById("i6").innerHTML = "Segundo: " + segundo;
    if (milisegundo < 100) {milisegundo = "0" + milisegundo;}
    if (milisegundo < 10) {milisegundo = "0" + milisegundo;}
    document.getElementById("i7").innerHTML = "Milisegundo: " + milisegundo;
    document.getElementById("i8").innerHTML = "Hoy es " + dias[dia] + " " + dia + " de " + meses[mes];

    setTimeout(Reloj,300)
}
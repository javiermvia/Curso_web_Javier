function obtenerlitros() {
    var litro = Number(document.getElementById("number1").value);
    var decilitro = litro * 10;
    var centilitro = litro * 100;
    var mililitro = litro * 1000;

    document.getElementById("etiqueta1").innerHTML = "Número de Litros " + litro + "<br>" + "Número de Decilitros " + decilitro + "<br>" + "Número de Centilitros " + centilitro + "<br>" + "Número de Mililitros " + mililitro + "<br>"
}
function obtenerlongitud() {
    var metro = Number(document.getElementById("number2").value);
    var decimetro = metro * 10;
    var centimetro = metro * 100;
    var milimetro = metro * 1000;

    document.getElementById("etiqueta2").innerHTML = "Número de Metros " + metro + "<br>" + "Número de Decimetros " + decimetro + "<br>" + "Número de Centimetros " + centimetro + "<br>" + "Número de Milimetros " + milimetro + "<br>"
}
function obtenerTiempo() {
    var dia = Number(document.getElementById("number3").value);
    var hora = dia * 24;
    var minuto = hora * 60;
    var segundo = minuto * 60;

    document.getElementById("etiqueta3").innerHTML = "Número de Días " + dia + " día" + "<br>" + "Número de Horas " + hora + "h" + "<br>" + "Número de Minutos " + minuto + "min" + "<br>" + "Número de Segundos " + segundo + "secs" + "<br>"
}
function obtenerTemperatura() {
    var C = Number(document.getElementById("number4").value);
    var F = C * 1.8 + 32;
    var K = C + 273.15;

    document.getElementById("etiqueta4").innerHTML = C + " ℃" + "<br>" + F + " ℉" + "<br>" + K + " K" + "<br>"
}
function obtenerPeso() {
    var tonelada = Number(document.getElementById("number5").value);
    var kilogramos = tonelada * 1000;
    var gramos = kilogramos * 1000;
    var miligramos = gramos * 1000;
    
    document.getElementById("etiqueta5").innerHTML = "Número de Toneladas " + tonelada + "<br>" + "Número de Kilogramos " + kilogramos + "<br>" + "Número de Gramos " + gramos + "<br>" + "Número de Miligramos " + miligramos + "<br>"
}
/* El resto son tb iguales. Seguiré con el anterior ejercicio, haciendo otras pruebas que pretendía hacer. */
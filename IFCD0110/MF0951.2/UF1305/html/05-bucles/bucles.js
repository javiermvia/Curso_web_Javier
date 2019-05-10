function f2() {
    var usertime = new Date(document.getElementById("date2").value);
    console.log(usertime + typeof(usertime));
    valordia = usertime.getDate();
    valormes = usertime.getMonth();
    valor = parseInt(valordia) + parseInt(valormes)*100;
    console.log(valordia + typeof(valordia) + valormes + typeof(valormes) + valor + typeof(valor));
    if (valor > 19 && valor < 120) {
        signo = "Acuario"
    }
    else if (valor > 119 && valor < 221) {
        signo = "Piscis"
    }
    else if (valor > 220 && valor < 321) {
        signo = "Aries"
    }
    else if (valor > 320 && valor < 421) {
        signo = "Tauro"
    }
    else if (valor > 420 && valor < 522) {
        signo = "Géminis"
    }
    else if (valor > 521 && valor < 623) {
        signo = "Cáncer"
    }
    else if (valor > 622 && valor < 724) {
        signo = "Leo"
    }
    else if (valor > 723 && valor < 824) {
        signo = "Virgo"
    }
    else if (valor > 823 && valor < 923) {
        signo = "Libra"
    }
    else if (valor > 922 && valor < 1023) {
        signo = "Escorpio"
    }
    else if (valor > 1022 && valor < 1022) {
        signo = "Sagitario"
    }
    else if (valor > 1021 && valor < 1120 || valor > 0 && valor < 20) {
        signo = "Capricornio"
    }
    else {
        signo = "gilipollas"
    }
    document.getElementById("etiqueta2").innerHTML = "Eres " + signo;
}

function f3() {
    var pctime = new Date();
    console.log(pctime + typeof(pctime));
    var usertime = new Date(document.getElementById("date3").value);
    console.log(usertime + typeof(usertime));
    var edad = pctime - usertime;
    var edadbien = edad/(1000*60*60*24*365.242);
    var dias = (edadbien - Math.trunc(edadbien))*365.242;
    var horas = (dias - Math.trunc(dias))*24;
    var minutos = (horas - Math.trunc(horas))*60;
    console.log(edad + typeof(edad) + "\n" + edadbien + typeof(edadbien) + "\n" + dias + typeof(dias) + "\n" + horas + typeof(horas) + "\n" + minutos + typeof(minutos));
    
    switch (true) {
        case edadbien >= 5 && edadbien < 8:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo prebenjamines."
            break;
        case edadbien >= 8 && edadbien < 10:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo benjamines."
            break;
        case edadbien >= 10 && edadbien < 12:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo alevines."
            break;
        case edadbien >= 12 && edadbien < 14:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo infantiles."
            break;
        case edadbien >= 14 && edadbien < 16:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo cadetes."
            break;
        case edadbien >= 16 && edadbien < 19:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo juveniles."
            break;
        case edadbien >= 19:
        document.getElementById("etiqueta3").innerHTML = "Perteneces al grupo aficionados."
            break;
        default:
        document.getElementById("etiqueta3").innerHTML = "No hay grupo para tí..."
            break;
    }
}
function f4() {
    var mistring = document.getElementById("text4").value.replace(/,/g,"");
    var miarray = mistring.split(" ");
    console.log(mistring + typeof(mistring) + miarray + typeof(miarray) + miarray.length);
    var counter = [0];
    document.getElementById("etiqueta4").innerHTML = "<ul id=\"ul4\"></ul>";
    f4plus();
    function f4plus() {
        if (counter < miarray.length) {
        document.getElementById("ul4").innerHTML += "<li>" + miarray[counter] + "</li>";
        counter++
        f4plus();
        }
    }
}
function f5() {
    var mistring = document.getElementById("number5").value;
    console.log(mistring + typeof(mistring));
    var counter = [1];
    document.getElementById("etiqueta5").innerHTML = "<table><tbody id=\"tr5\"><tr><td><strong>Tabla de multiplicar</strong></td></tr>";
    f5plus();
    function f5plus() {
        if (counter < 11) {
        document.getElementById("tr5").innerHTML += "<tr><td>" + mistring + "x" + counter + "=" + mistring*counter + "</td></tr>";
        counter++
        f5plus();
        }
        else {
        document.getElementById("tr5").innerHTML += "</tbody></table>";
        }
    }
}

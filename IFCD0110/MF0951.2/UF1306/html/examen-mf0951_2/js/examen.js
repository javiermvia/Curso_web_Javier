function E1() {
    var navegador;
    var version;
    var propietario;
    if (navigator.userAgent.indexOf("Firefox") > -1){
        navegador = "Firefox";
        propietario = "Fundación Mozilla";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Firefox")+8, navigator.userAgent.indexOf("Firefox")+8+8);
    }
    else if ((navigator.userAgent.indexOf("Opera") > -1) || (navigator.userAgent.indexOf("OPR") > -1)) {
        navegador = "Opera";
        propietario = "Opera Software";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Opera")+6, navigator.userAgent.indexOf("Opera")+6+8);
    }
    else if ((navigator.userAgent.indexOf("Trident") > -1) || (navigator.userAgent.indexOf("MSIE") > -1)) {
        navegador = "Internet Explorer";
        propietario = "Microsoft";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Trident")+8, navigator.userAgent.indexOf("Trident")+8+8);
    }
    else if (navigator.userAgent.indexOf("Edge") > -1) {
        navegador = "Edge";
        propietario = "Microsoft";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Edge")+5, navigator.userAgent.indexOf("Edge")+5+8);
    }
    else if (navigator.userAgent.indexOf("Chrome") > -1) {
        navegador = "Chrome";
        propietario = "Google";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Chrome")+7, navigator.userAgent.indexOf("Chrome")+7+8);
    }
    else if (navigator.userAgent.indexOf("Safari") > -1) {
        navegador = "Safari";
        propietario = "Apple";
        version = navigator.userAgent.slice(navigator.userAgent.indexOf("Safari")+7, navigator.userAgent.indexOf("Safari")+7+8);
    }
    else {
        navegador = "Otro"
        propietario = "Ya ves...";
        version = "Quién sabe"
    }
document.getElementById("form1").innerHTML +=
"<u><br><br>Product:</u> " + navegador +
"<u><br>AppVersion:</u> " + version +
"<u><br>Owner:</u> " + propietario
}
function E2() {
    var fecha = new Date(document.getElementById("date2").value)
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var mes = fecha.getMonth();
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    var diasemana = fecha.getDay();
    var dia = fecha.getDate();
    var yyy = fecha.getFullYear();
    var fecha2 = dias[diasemana] + ' , ' + dia + ' ' + meses[mes] + ' , ' + yyy;
document.getElementById("form2").outerHTML +=
"<p>" + fecha2 + "</p>"
}
function E3() {
    var datos = document.getElementById("textfield1").value;
    console.log(datos + "--> " + typeof datos);
    var datosarray = datos.split(", ").join("</li><li>")
    console.log(datosarray + "--> " + typeof datosarray);
    console.log(datos[0] + ", \n" + datosarray[0] + ", \n");
document.getElementById("form3").outerHTML += "<ul><li>" + datosarray + "</li></ul>"
}
function E4() {
    var fecha = new Date(document.getElementById("date3").value);
    var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    var yyyy = fecha.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    var fecha = dd+'/'+mm+'/'+yyyy;
    console.log(fecha);
    fecha0 = new Date();
    var h = fecha0.getHours();
    var m = fecha0.getMinutes();
    var s = fecha0.getSeconds();
    var momento = h+':'+m+':'+s;
document.getElementById("form4").outerHTML += "<p>Has iniciado sesión el día " + fecha + " a las " + momento + "</p>";
}
function E5() {
    var datos = document.getElementById("number1").value;
    var desc = datos*20/100;
    var iva = (datos-desc)*21/100;
    var total = datos-desc+iva;
document.getElementById("form5").outerHTML += 
"<u><br>Subtotal:</u> " + datos +
"<u><br>Descuento:</u> " + desc +
"<u><br>IVA:</u> " + iva +
"<u><br>Total:</u> " + total;
}
function E6() {
    var usertime = new Date(document.getElementById("date4").value);
    console.log(usertime + typeof(usertime));
    valordia = usertime.getDate();
    valormes = usertime.getMonth();
    valor = parseInt(valordia) + parseInt(valormes)*100;
    console.log(valordia + typeof(valordia) + valormes + typeof(valormes) + valor + typeof(valor));
    if (valor > 19 && valor < 120) {
        var signo = "Acuario"
        var img = "aquarius.jpg"
    }
    else if (valor > 119 && valor < 221) {
        var signo = "Piscis"
        var img = "piscis.jpg"
    }
    else if (valor > 220 && valor < 321) {
        var signo = "Aries"
        var img = "aries.jpg"
    }
    else if (valor > 320 && valor < 421) {
        var signo = "Tauro"
        var img = "taurus.jpg"
    }
    else if (valor > 420 && valor < 522) {
        var signo = "Géminis"
        var img = "gemini.jpg"
    }
    else if (valor > 521 && valor < 623) {
        var signo = "Cáncer"
        var img = "cancer.jpg"
    }
    else if (valor > 622 && valor < 724) {
        var signo = "Leo"
        var img = "leo.jpg"
    }
    else if (valor > 723 && valor < 824) {
        var signo = "Virgo"
        var img = "virgo.jpg"
    }
    else if (valor > 823 && valor < 923) {
        var signo = "Libra"
        var img = "libra.jpg"
    }
    else if (valor > 922 && valor < 1023) {
        var signo = "Escorpio"
        var img = "scorpio.jpg"
    }
    else if (valor > 1022 && valor < 1022) {
        var signo = "Sagitario"
        var img = "sagittarius.jpg"
    }
    else if (valor > 1021 && valor < 1120 || valor > 0 && valor < 20) {
        var signo = "Capricornio"
        var img = "capricorn.jpg"
    }
    else {
        var signo = "gilipollas"
    }
    console.log(img + signo)
    document.getElementById("form6").outerHTML += "<figure style='display:block; width:100%; text-align:center;'><img style='display:block; margin:auto;' src=\"./img/" + img + "\"></img><figcaption>Eres " + signo + "</figcaption></figure>";
}
function E7() {
    var mistring = document.getElementById("number2").value;
    console.log(mistring + typeof(mistring));
    var counter = [1];
    document.getElementById("form7").outerHTML += "<table><tbody id=\"tr7\"><tr><td><strong>Tabla de multiplicar</strong></td></tr>";
    E7plus();
    function E7plus() {
        if (counter < 11) {
        document.getElementById("tr7").innerHTML += "<tr><td>" + mistring + "x" + counter + "=" + mistring*counter + "</td></tr>";
        counter++
        E7plus();
        }
        else {
        document.getElementById("tr7").innerHTML += "</tbody></table>";
        }
    }
}
function E8() {
    var pctime = new Date();
    console.log(pctime + typeof(pctime));
    var usertime = new Date(document.getElementById("date5").value);
    var yyyy = usertime.getFullYear();
    console.log(usertime + typeof(usertime));
    var edad = pctime - usertime;
    var edadbien = edad/(1000*60*60*24*365.242);
    var dias = (edadbien - Math.trunc(edadbien))*365.242;
    var horas = (dias - Math.trunc(dias))*24;
    var minutos = (horas - Math.trunc(horas))*60;
    console.log(edad + typeof(edad) + "\n" + edadbien + typeof(edadbien) + "\n" + dias + typeof(dias) + "\n" + horas + typeof(horas) + "\n" + minutos + typeof(minutos));
    if (yyyy < 2000) {
        document.getElementById("form8").outerHTML += "<span style='color: red;'>No hay grupo para tí...</span>"
    }
    else {
        switch (true) {
            case edadbien >= 7 && edadbien < 9:
            document.getElementById("form8").outerHTML += "Perteneces al grupo prebenjamines."
                break;
            case edadbien >= 9 && edadbien < 11:
            document.getElementById("form8").outerHTML += "Perteneces al grupo benjamines."
                break;
            case edadbien >= 11 && edadbien < 13:
            document.getElementById("form8").outerHTML += "Perteneces al grupo alevines."
                break;
            case edadbien >= 13 && edadbien < 15:
            document.getElementById("form8").outerHTML += "Perteneces al grupo infantiles."
                break;
            case edadbien >= 15 && edadbien < 17:
            document.getElementById("form8").outerHTML += "Perteneces al grupo cadetes."
                break;
            case edadbien >= 17 && edadbien < 20:
            document.getElementById("form8").outerHTML += "Perteneces al grupo juveniles."
                break;
            case edadbien >= 20:
            document.getElementById("form8").outerHTML += "Perteneces al grupo Sénior."
                break;
            default:
            document.getElementById("form8").outerHTML += "<span style='color: red;'>No hay grupo para tí...</span>"
                break;
        }
    }
}
function E9() {
    var info = []
    var nombre = prompt("Nombre", "");
    var apellido = prompt("Apellido", "");
    var telefono = prompt("Telefono", "");
    var email = prompt("Email", "");
    var fecha = prompt("Fecha", "");
    var edad = prompt("Edad", "");
    info[0] = nombre;
    info[1] = apellido;
    info[2] = telefono;
    info[3] = email;
    info[4] = fecha;
    info[5] = edad;
    console.log(info);
    E9plus();
    function E9plus() {
        if (document.getElementById("table9") != null) {
        document.getElementById("tb9").innerHTML +=
        "<tr>" +
            "<td>" + info[0] + "</td>" +
            "<td>" + info[1] + "</td>" +
            "<td>" + info[2] + "</td>" +
            "<td>" + info[3] + "</td>" +
            "<td>" + info[4] + "</td>" +
            "<td>" + info[5] + "</td>" +
        "</tr>";

        var tr = document.getElementsByTagName("tr");
        for(var i0 = 0; i0 < tr.length; i0++) {
            tr[i0].style.border="1px solid black";
        };
        var th = document.getElementsByTagName("th");
        for(var i1 = 0; i1 < th.length; i1++) {
            th[i1].style.border="1px solid black";
        };
        var td = document.getElementsByTagName("td");
        for(var i2 = 0; i2 < td.length; i2++) {
            td[i2].style.border="1px solid black";
        };
        }
        else {
        document.getElementById("form9").outerHTML +=
        "<table id=\"table9\" style='width: 100%; text-align: center;'><tbody id=\"tb9\">" +
        "<tr>" +
            "<th>Nombre</th>" +
            "<th>Apellido</th>" +
            "<th>Teléfono</th>" +
            "<th>Email</th>" +
            "<th>Fecha</th>" +
            "<th>Edad</th>" +
        "</tr>" +
        "</tbody></table>";
        E9plus();
        }
    }
}
function E10() {
    document.body.innerHTML += "<div id=\"cookies\" style=\"font-size: 20px; position: fixed; bottom: 0; right: 0; width: 94%; padding: 30px; background-color: black; color: red;\"><span style=\"float: right; display:inline-block; font-size:30px;\"><span id='close' onclick=\"E10plus()\" style=\"position: relative; bottom: 35px; left: 20px; cursor: pointer;\">x</span></span><div style=\"position: relative;\">“Según el apartado 2 del artículo 22 de la LSSI le informamos que utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Tras aceptar o cerrar el mensaje, entendemos que acepta nuestra Política de Cookies”.</div><div style=\"text-align: center; margin-top: 20px;\"><button onclick=\"E10plus()\">ACEPTAR LAS COOKIES</button></div></div>"
}
function E10plus() {
    var cookies = document.getElementById("cookies");
    cookies.parentNode.removeChild(cookies);
}

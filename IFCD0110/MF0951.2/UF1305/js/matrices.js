function f1() {
    var datos = document.getElementById("t1d").innerHTML;
    console.log(datos + "--> " + typeof datos);
    var dato1 = ("\"" + datos.slice(0, datos.search(" ")) + "\", ");
    console.log(dato1 + "--> " + typeof dato1);
    var dato2 = ("\"" + datos.slice((dato1.length - 3), datos.indexOf(" ",(dato1.length - 3))) + "\", ");
    console.log(dato2 + "--> " + typeof dato2);
    var dato3 = ("\"" + datos.slice(((dato1.length - 3) + (dato2.length - 3)), datos.indexOf(" ",(dato1.length - 3) + (dato2.length - 3))) + "\", ");
    console.log(dato3 + "--> " + typeof dato3);
    var datossuma = dato1 + dato2 + dato3;
    console.log(datossuma + "--> " + typeof datossuma);
    var datosfinal = datossuma.slice(0, datossuma.length - 2);
    console.log(datosfinal + "--> " + typeof datosfinal);
    var datosarray = new Array (datosfinal);
    console.log(datosarray + "--> " + typeof datosarray);
    document.getElementById("t1r").innerHTML = datosarray;
}
/* Requiere optimización */

function f2() {
    var datos = document.getElementById("t2d").innerHTML;
    console.log(datos + "--> " + typeof datos);
    var datosarray = datos.split(" ")
    console.log(datosarray + "--> " + typeof datosarray);
    document.getElementById("t2r").innerHTML = datosarray;
    console.log(datos[0] + ", \n" + datosarray[0] + ", \n");
}

function f3() {
    /* Primera parte de la cadena */
    var datos1 = document.getElementById("t3d").innerHTML;
    console.log("datos1 " + datos1 + "--> " + typeof datos1);
    var datosarray1 = datos1.split(" ");
    console.log("datosarray1 " + datosarray1 + "--> " + typeof datosarray1);
    /* Segunda parte de la cadena */
    var datos2 = prompt("Nuevos datos (separados por espacios)");
    console.log("datos2 " + datos2 + "--> " + typeof datos2);
    var datosarray2 = datos2.split(" ");
    console.log("datosarray2 " + datosarray2 + "--> " + typeof datosarray2);
    /* Cadena final */
    var datosarray = datosarray1
    datosarray.splice(prompt("Posición en la que quieres añadir tu cadena"), 0, datosarray2);
    document.getElementById("t3r").innerHTML = "datosarray " + datosarray + "--> " + typeof datosarray;
}

/* if, if else, else, switch (case1,case2,default), for, while, do while,and, or, not */
function f4() {
    var dato = document.getElementById("t4d").innerHTML;

    switch (convertir) {
        case 0:
        document.getElementById("t4r").innerHTML = "0 eh? interesante elección. <br> Par, por cierto.";
            break;
        case 1:
        document.getElementById("t4r").innerHTML = "Aceituno. <br> Este es impar.";
            break;
        default:
        if (isFinite(dato) == true) {
            if (dato < 0) {
                document.getElementById("t4r").innerHTML = "Tu número es negativo."
            }
            if (dato >= 0 && dato < 10) {
                document.getElementById("t4r").innerHTML = "Tu número es mayor o igual a 0 y menor que 10."
            }
            if (dato >= 10 && dato < 20) {
                document.getElementById("t4r").innerHTML = "Tu número es mayor o igual a 10 y menor que 20."
            }
            if (dato >= 20 && dato < 30) {
                document.getElementById("t4r").innerHTML = "Tu número es mayor o igual a 20 y menor que 30."
            }
            if (dato >= 30) {
                document.getElementById("t4r").innerHTML = "Tu número es mayor o igual a 40."
            }
            if (dato & 1) { // ODD
                document.getElementById("t4r").innerHTML += "<br> Tu número es impar."
            } 
            else { // EVEN
                document.getElementById("t4r").innerHTML += "<br> Tu número es par."
            }
        }
        else {
            document.getElementById("t4r").innerHTML = "Inserta un número válido"
        }
            break;
        }
}

function f5() {

    var dato = document.getElementById("t5d").innerHTML;
    var convertir = parseInt(dato);

    if (convertir!= isNaN) {document.getElementById("t5r").innerHTML = "Por favor, introduce un número";}

    if (dato < 0) {
        document.getElementById("t5r").innerHTML = "Tu número es negativo.";
        if (dato % 2) { // ODD
            document.getElementById("t5r").innerHTML += "<br> Tu número es impar."
        } 
        else { // EVEN
            document.getElementById("t5r").innerHTML += "<br> Tu número es par."
        }
    }
    if (dato >= 0 && dato < 10) {
        document.getElementById("t5r").innerHTML = "Tu número es mayor o igual a 0 y menor que 10.";
        if (dato % 2) { // ODD
            document.getElementById("t5r").innerHTML += "<br> Tu número es impar."
        } 
        else { // EVEN
            document.getElementById("t5r").innerHTML += "<br> Tu número es par."
        }
    }
    if (dato >= 10 && dato < 20) {
        document.getElementById("t5r").innerHTML = "Tu número es mayor o igual a 10 y menor que 20.";
        if (dato % 2) { // ODD
            document.getElementById("t5r").innerHTML += "<br> Tu número es impar."
        } 
        else { // EVEN
            document.getElementById("t5r").innerHTML += "<br> Tu número es par."
        }
    }
    if (dato >= 20 && dato < 30) {
        document.getElementById("t5r").innerHTML = "Tu número es mayor o igual a 20 y menor que 30.";
        if (dato % 2) { // ODD
            document.getElementById("t5r").innerHTML += "<br> Tu número es impar."
        } 
        else { // EVEN
            document.getElementById("t5r").innerHTML += "<br> Tu número es par."
        }
    }
    if (dato >= 30) {
        document.getElementById("t5r").innerHTML = "Tu número es mayor o igual a 40.";
        if (dato % 2) { // ODD
            document.getElementById("t5r").innerHTML += "<br> Tu número es impar."
        } 
        else { // EVEN
            document.getElementById("t5r").innerHTML += "<br> Tu número es par."
        }
    }
    switch (parseInt(dato)) {
        case 0:
        document.getElementById("t5r").innerHTML = "0 eh? interesante elección. <br> Par, por cierto.";
            break;
        case 1:
        document.getElementById("t5r").innerHTML = "Aceituno. <br> Este es impar.";
            break;
        default:
            break;
        }
}
function f6() {
    var dato = document.getElementById("t6d").innerHTML;
    var convertir = parseInt(dato);

    console.log ("dato: " + dato + "\n typeof dato: " + typeof(dato) + "\n isNaN: " + isNaN(dato) + "\n isInteger: " + Number.isInteger(dato) + "\n isFinite: " + isFinite(dato) + "\nconvertir: " + convertir + "\n typeof convertir: " + typeof(convertir) + "\n isNaN: " + isNaN(convertir) + "\n isInteger: " + Number.isInteger(convertir) + "\n isFinite: " + isFinite(convertir))
    document.getElementById("t6r").innerHTML = "Resultado en la consola."
}
function f7() {
    var dato = document.getElementById("t7d").innerHTML;
    var convertir = parseInt(dato);
    document.getElementById("t7r").innerHTML = RegExp("e").test(dato)
    /* Función sin finalizar, probablemente me sirva en el futuro. */
}
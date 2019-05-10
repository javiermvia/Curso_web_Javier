function f1() {
    window.alert("La descripción cuenta con " + document.getElementById("td1").innerHTML.length + " caracteres.")
}
/* function f2() {
    window.alert("Primer caracter = " + document.getElementById("td2").innerHTML.charAt(0) + "\n" + "Segundo caracter = " + document.getElementById("td2").innerHTML.charAt(1))
} */
function f2() {
    var nombre =  prompt("Nombre: ")
    var numero = prompt("Posición de la letra deseada: ")
    alert ("Posición " + numero + " es " + nombre.charAt(numero-1))
}
/* function f3() {
    window.alert("Primer caracter = " + document.getElementById("td3").innerHTML.charCodeAt(0) + "\n" + "Segundo caracter = " + document.getElementById("td3").innerHTML.charCodeAt(1))
} */
function f3() {
    var coded = prompt ("Caracter");
    var numero = prompt("Posición de la letra deseada: ")
    alert ("Posición " + numero + " es " + coded.charCodeAt(numero-1))
}
function f4() {
    var coded = prompt('Code');
    window.alert("Coded: " + coded + "\n" + "Uncoded: " + String.fromCharCode(coded))
}
function f5() {
    var texto = prompt('Frase');
    window.alert(texto.toUpperCase(texto))
}
function f6() {
    var texto = prompt('Frase');
    window.alert(texto.toLowerCase(texto))
}
function f7() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Frase2');
    window.alert(texto1.concat(texto2))
}
function f8() {
    var texto1 = prompt('Frase');
    var texto2 = prompt('¿Acaba mi frase en ...?');
    window.alert(texto1.endsWith(texto2))
}
function f9() {
    var texto1 = prompt('Frase');
    var texto2 = prompt('¿Incluye mi frase ...?');
    window.alert(texto1.includes(texto2))
}
function f10() {
    var texto1 = prompt('Frase');
    var texto2 = prompt('Palabra que busco (devuelve primera aparición)');
    window.alert(texto1.IndexOf(texto2))
}
function f11() {
    var texto1 = prompt('Frase');
    var texto2 = prompt('Palabra que busco (devuelve última aparición)');
    window.alert(texto1.lastIndexOf(texto2))
}
function f12() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Frase2');
    window.alert(texto1.localeCompare(texto2))
}
function f13() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Frase2');
    window.alert(texto1.match(texto2))
}
function f14() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Número de veces a repetir');
    window.alert(texto1.repeat(texto2))
}
function f15() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Palabra a sustituir');
    var texto3 = prompt('Sustituta');
    window.alert(texto1.replace(texto2, texto3))
}
function f16() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Búsqueda');
    window.alert(texto1.search(texto2))
}
/* slice admite caracteres negativos */
function f17() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Recortar desde');
    var texto3 = prompt('Recortar hasta');
    window.alert(texto1.slice(texto2, texto3))
}
function f18() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('caracter que deseas que sea sustituido por comas');
    window.alert(texto1.split(texto2))
}
function f19() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('¿Empieza con...?');
    window.alert(texto1.startsWith(texto2))
}
function f20() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Extraer desde');
    var texto3 = prompt('nº de caracteres a extraer');
    window.alert(texto1.substr(texto2, texto3))
}
/* substring no admite valores negativos */
function f21() {
    var texto1 = prompt('Frase1');
    var texto2 = prompt('Extraer desde');
    var texto3 = prompt('Extraer hasta');
    window.alert(texto1.substring(texto2, texto3))
}
function f22() {
    var texto = prompt('Número');
    console.log(parseInt(texto)) 
    if (isNaN(texto) || texto.length === 0) {
        window.alert(texto + " no es un número, es un " + typeof texto + " no válido")
        f22()
    }
    else {
        window.alert(texto + " es un " + typeof texto + " válido")
        var numero = parseInt(texto)
        window.alert(texto + " era " + typeof texto + 
        "\n" +  numero + " fue " + typeof numero + " tras usar parseInt " + 
        "\n" + numero.toString() + " es " + typeof numero.toString() + " tras ejecutar toString")
    }
}
function f23() {
    var texto = prompt('Mete espacios en blanco antes y despues, si tienes lo que hay que tener...');
    window.alert(texto.trim() + ", pues te los elimino.")
}
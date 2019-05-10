function f1() {
    alert("Fuck you bitch");
}
function f2() {
    document.body.innerHTML += "<div id=\"cookies\" style=\"font-size: 20px; position: fixed; bottom: 0; right: 0; width: 100%; padding: 30px; background-color: black; color: red;\"><span style=\"float: right; display:inline-block; font-size:30px;\"><span id='close' onclick=\"f3()\" style=\"position: relative; bottom: 35px; left: 20px; cursor: pointer;\">x</span></span><div style=\"position: relative;\">Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si pulsa en el botón o continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información <a style=\"color: green;\" href=\"../html/cookies.html\">‘aquí’</a>.</div><div style=\"text-align: center; margin-top: 20px;\"><button onclick=\"f4()\">ACEPTAR LAS COOKIES</button></div></div>"
}
function f3() {
    var cookies = document.getElementById("cookies");
    cookies.parentNode.removeChild(cookies);
}
function f4() {
    var caducidad = new Date().setFullYear(1 + new Date().getFullYear());
    nombre = prompt("name:");
    apellido = prompt("apellido:");
    document.cookie = "nombre=" + nombre + "; expires=" + new Date(caducidad);
    document.cookie = "apellido=" + apellido + "; expires=" + new Date(caducidad);

    console.log(document.cookie + "\n" + new Date().getFullYear() + "\n" + new Date(caducidad));
}
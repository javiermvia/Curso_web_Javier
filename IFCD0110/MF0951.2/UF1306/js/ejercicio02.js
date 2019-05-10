function f1() {
    console.log("Punto1");
    window.onclick = function(e) {
        console.log(e.target);
        console.log(e.target.tagName);
    if (e.target.id == "Img1") {
        console.log("Nada");
    } 
    else if (e.target.tagName == "IMG") {
        console.log("Crear");
        var imagen = e.target.getAttribute('src')
        console.log(imagen);
        document.body.innerHTML += "<figure id='Fig1'><img id='Img1' src=" + imagen + "></img></figure>";
    }
    if (e.target.id == "Fig1") {
        console.log("Eliminar");
        var Fig1 = document.getElementById("Fig1");
        Fig1.parentNode.removeChild(Fig1);
    }
    else
    console.log("Nada");
    }
}
function f2() {
    if (event.keyCode === 27){ //if esc key pressed
        console.log("Eliminar");
        var Fig1 = document.getElementById("Fig1");
        Fig1.parentNode.removeChild(Fig1);
    }
}
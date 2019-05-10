function pantalla() {
    var div1 = document.getElementById("divBom")
    div1.innerHTML = "Ancho " + screen.width + "\nAlto " + screen.height
}
function pantallaDisponible() {
    var div1 = document.getElementById("divBom")
    div1.innerHTML = "Ancho disponible " + screen.availWidth + "\nAlto disponible " + screen.availHeight
}
function pantallaProfundidad() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "Profundidad de color " + screen.colorDepth + "\nProfundidad de pixel " + screen.pixelDepth
}
function urlPagina() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + window.location.href
}
function dominioPagina() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + window.location.hostname
}
function rutaPagina() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + window.location.pathname
}
function protocoloPagina() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + window.location.protocol
}
function puertoPagina() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + window.location.assign
}
function irAtras() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + history.back ( )
}
function irAdelante() {
    var div1 = document.getElementById("infoPantalla")
    div1.innerHTML = "---> " + history.forward ( ) 
}
function infoNavegador() {
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

    document.getElementById("infoNav").innerHTML +=
    "<u><br><br>AppName:</u> " + navigator.appName +
    "<u><br>AppCodeName:</u> " + navigator.appCodeName +
    "<u><br>Product1:</u> " + navigator.product +
    "<u><br>Product2:</u> " + navegador +
    "<u><br>AppVersion1:</u> " + navigator.appVersion +
    "<u><br>AppVersion2:</u> " + version +
    "<u><br>Owner:</u> " + propietario +
    "<u><br>Platform:</u> " + navigator.platform +
    "<u><br>Language:</u> " + navigator.language +
    "<u><br>Online:</u> " + navigator.onLine +
    "<u><br>JavaEnabled:</u> " + navigator.javaEnabled() +
    "<u><br>Cookie:</u> " + navigator.cookieEnabled +
    "<u><br>Plug-ins:</u> " + navigator.plugins.length +
    "<u><br>Historylenght:</u> " + window.history.length +
    "<u><br>Position:</u> " + fcp() +
    "<u><br>UserAgent:</u> " + navigator.userAgent;
    function fcp(){document.This.write(position.coords.latitude)}
    navigator.geolocation.getCurrentPosition(fcp)
}

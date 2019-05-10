function f1() {
    var pctime = new Date();
    console.log(pctime + typeof(pctime));
    var usertime = new Date(document.getElementById("date1").value);
    console.log(usertime + typeof(usertime));
    var edad = pctime - usertime;
    var edadbien = edad/(1000*60*60*24*365.242);
    var dias = (edadbien - Math.trunc(edadbien))*365.242;
    var horas = (dias - Math.trunc(dias))*24;
    var minutos = (horas - Math.trunc(horas))*60;
    console.log(edad + typeof(edad) + "\n" + edadbien + typeof(edadbien) + "\n" + dias + typeof(dias) + "\n" + horas + typeof(horas) + "\n" + minutos + typeof(minutos));
    
    document.getElementById("etiqueta1").innerHTML = "Tienes " + Math.trunc(edadbien) + " años."
    + "<br><ul><li>Y has vivido un total de:</li>"
    + "<br><li>" + Math.trunc(dias) + " días</li>"
    + "<br><li>" + Math.trunc(horas) + " horas</li>"
    + "<br><li>" + Math.trunc(minutos) + " minutos</li></ul>"
}

/*     var ul1 = document.createElement("ul");
    ul1.insertAdjacentElement("afterend" , document.getElementById("etiqueta1"));
    ul1.setAttribute("id", "ul1");
    var newlidias = document.getElementById("ul1").appendChild(document.createElement("li"));
    newlidias.innerHTML = "hey";
    var newlihoras = document.getElementById("ul1").appendChild(document.createElement("li"));
    newlihoras.innerHTML = "hop";
    var newliminutos = document.getElementById("ul1").appendChild(document.createElement("li"));
    newliminutos.innerHTML = "hip-hop"; */
function f2() {
    var dia = document.getElementById("etiqueta2").value;
    var mes = document.getElementById("etiqueta2").value;
    var ano = document.getElementById("etiqueta2").value;
    
    document.getElementById("etiqueta2").innerHTML = "Tienes " + Math.trunc(edadbien) + " años."
    + "<br><ul><li>Y has vivido un total de:</li>"
    + "<br><li>" + Math.trunc(dias) + " días</li>"
    + "<br><li>" + Math.trunc(horas) + " horas</li>"
    + "<br><li>" + Math.trunc(minutos) + " minutos</li></ul>"
}
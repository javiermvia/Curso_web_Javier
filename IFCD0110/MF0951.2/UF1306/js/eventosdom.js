document.addEventListener("mousedown", function() {f1()});
document.addEventListener("keydown", function() {f2()});

document.addEventListener("ondblclick", function() {fb2()});
document.addEventListener("oncontextmenu", function() {fb3()});
document.addEventListener("onmousedown", function() {fb4()});
document.addEventListener("onmouseenter", function() {fb5()});
document.addEventListener("onmouseleave", function() {fb6()});
document.addEventListener("onmousemove", function() {fb7()});
document.addEventListener("onmouseout", function() {fb8()});
document.addEventListener("onmouseover", function() {fb9()});
document.addEventListener("onmouseup", function() {fb10()});
window.onclick = function f1(puntero) {
	console.log("F1: ---inicio---");
	console.log(puntero.target);
	console.log("puntero.target.tagName: " + puntero.target.tagName);
	console.log("puntero.target.id: " + puntero.target.id);
	console.log("puntero.target.className: " + puntero.target.className);
	console.log("puntero.target.value: " + puntero.target.value);
	console.log("puntero.target.innerText: " + puntero.target.innerText);
	console.log("F1: ---fin---");
	fbombilla();
	function fbombilla() {
		if (puntero.target.innerText == "Apagar todas las bombillas") {
			console.log("Apagar todas las bombillas")
			var cont = 1
			fapagar()
			function fapagar(params) {
				if (cont <= 10) {
					document.getElementById("img" + cont).setAttribute("src", "../img/pic_bulboff.gif");
					cont++
					console.log(cont)
					fapagar()
				}
			}
		}
		if (puntero.target.innerText == "Limpiar eventos") {
			console.log("Limpiar eventos")
		}
		if (puntero.target.id == "img1") {
		console.log("fb1-1")
		document.getElementById("img1").setAttribute("src", "../img/pic_bulbon.gif");
		}
	}
}
function f2() {
	console.log("F2: ---inicio---");
	console.log("event.which: " + event.which)
	console.log("event.keyCode: " + event.keyCode)
	console.log("event.location: " + event.location)
	console.log("event.code: " + event.code)
	console.log("F2: ---fin---");
}
window.ondblclick = function fb2(puntero) {
	if (puntero.target.id == "img2") {
		console.log("fb2-1")
		document.getElementById("img2").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.oncontextmenu = function fb3(puntero) {
	if (puntero.target.id == "img3") {
		console.log("fb3-1")
		document.getElementById("img3").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmousedown = function fb4(puntero) {
	if (puntero.target.id == "img4") {
		console.log("fb4-1")
		document.getElementById("img4").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseenter = function fb5(puntero) {
	console.log("fb5-0")
	if (puntero.target.id == "img5") {
		console.log("fb5-1")
		document.getElementById("img5").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
/* function fb5() {
	document.getElementById("img5").setAttribute("src", "../img/pic_bulbon.gif");
} */
window.onmouseleave = function fb6(puntero) {
	console.log("fb6-0")
	if (puntero.target.id == "img6") {
		console.log("fb6-1")
		document.getElementById("img6").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmousemove = function fb7(puntero) {
	if (puntero.target.id == "img7") {
		console.log("fb7-1")
		document.getElementById("img7").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseout = function fb8(puntero) {
	if (puntero.target.id == "img8") {
		console.log("fb8-1")
		document.getElementById("img8").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseover = function fb9(puntero) {
	if (puntero.target.id == "img9") {
		console.log("fb9-1")
		document.getElementById("img9").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseup = function fb10(puntero) {
	if (puntero.target.id == "img10") {
		console.log("fb10-1")
		document.getElementById("img10").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
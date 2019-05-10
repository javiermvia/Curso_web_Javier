document.addEventListener("mousedown", function() {f1()});
document.addEventListener("onmouseover", function() {fenter()});
document.addEventListener("onmouseout", function() {fexit()});
window.ondblclick = function f1(puntero) {
	console.log("F1: ---inicio---");
	console.log(puntero.target);
	console.log("puntero.target.tagName: " + puntero.target.tagName);
	console.log("puntero.target.id: " + puntero.target.id);
	console.log("puntero.target.className: " + puntero.target.className);
	console.log("puntero.target.value: " + puntero.target.value);
	console.log("puntero.target.innerText: " + puntero.target.innerText);
    console.log("F1: ---fin---");
    if (puntero.target.className == "Img1") {
        console.log("fenter-1")
        document.getElementsByClassName("anterior").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseover = function fenter(puntero) {
    console.log("fenter-0")
	if (puntero.target.className == "anterior") {
        console.log("fenter-1")
        document.getElementsByClassName("anterior").setAttribute("src", "../img/pic_bulbon.gif");
	}
}
window.onmouseout = function fexit(puntero) {
/* solo añado para actualizar */
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
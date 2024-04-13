






//function open close

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};


	button.addEventListener("click", hamburgerMenu, false);		
})();



var btnRodri = document.querySelector("#btn_rodri");
btnRodri.addEventListener("click", function() {
    var divRodri = document.querySelector("#text_rodri");
    if (divRodri.style.display === "block") {
        divRodri.style.display = "none";
		console.log ('this is Rodri')
    } else {
        divRodri.style.display = "block";
	
    }

});

var btnAlfredo = document.querySelector("#btn_alfredo");
btnAlfredo.addEventListener("click", function() {
    var divAlfredo = document.querySelector("#text_alfredo");
    if (divAlfredo.style.display === "block") {
        divAlfredo.style.display = "none";
		console.log ('this is ALf')
    } else {
        divAlfredo.style.display = "block";
    }
});


var btnclose_r = document.querySelector("#btn_close_rodri");
var btnclose_a = document.querySelector("#btn_close_alfredo");

btnclose_r.addEventListener("click", function() {
    var divRodri = document.querySelector("#text_rodri");
    if (divRodri.style.display === "block") {
        divRodri.style.display = "none";
        console.log('closed rodri');
    }
});

btnclose_a.addEventListener("click", function() {
    var divAlfredo = document.querySelector("#text_alfredo");
    if (divAlfredo.style.display === "block") {
        divAlfredo.style.display = "none";
        console.log('closed alfredo');
    }
});





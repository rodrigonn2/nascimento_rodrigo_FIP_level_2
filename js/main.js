(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();


// Seleciona o primeiro botão
var btnRodri = document.querySelector("#btn_rodri");
// Adiciona um ouvinte de evento para o primeiro botão
btnRodri.addEventListener("click", function() {
    // Seleciona a div associada ao primeiro botão
    var divRodri = document.querySelector("#text_rodri");
    // Verifica se a div está visível ou oculta e alterna seu estado
    if (divRodri.style.display === "block") {
        divRodri.style.display = "none";
		console.log ('this is rodri')
    } else {
        divRodri.style.display = "block";
	
    }

});

// Seleciona o segundo botão
var btnAlfredo = document.querySelector("#btn_alfredo");
// Adiciona um ouvinte de evento para o segundo botão
btnAlfredo.addEventListener("click", function() {
    // Seleciona a div associada ao segundo botão
    var divAlfredo = document.querySelector("#text_alfredo");
    // Verifica se a div está visível ou oculta e alterna seu estado
    if (divAlfredo.style.display === "block") {
        divAlfredo.style.display = "none";
		console.log ('this is ALf')
    } else {
        divAlfredo.style.display = "block";
    }
});


var btnclose_r = document.querySelector("#btn_close_rodri");
var btnclose_a = document.querySelector("#btn_close_alfredo");

// Adiciona um ouvinte de evento para o primeiro botão
btnclose_r.addEventListener("click", function() {
    // Seleciona a div associada ao primeiro botão
    var divRodri = document.querySelector("#text_rodri");
    // Verifica se a div está visível ou oculta e alterna seu estado
    if (divRodri.style.display === "block") {
        divRodri.style.display = "none";
        console.log('closed rodri');
    }
});

// Adiciona um ouvinte de evento para o segundo botão
btnclose_a.addEventListener("click", function() {
    var divAlfredo = document.querySelector("#text_alfredo");
    // Verifica se a div Alfredo está visível e a fecha se estiver aberta
    if (divAlfredo.style.display === "block") {
        divAlfredo.style.display = "none";
        console.log('closed alfredo');
    }
});




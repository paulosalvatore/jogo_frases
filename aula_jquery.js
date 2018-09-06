// O que fazer?
// Alterar o texto do body

// Como fazer?
// Pegar o elemento (pelo ID)
// Alterar o texto do elemento

// Regra número 1: O código jQuery deve estar dentro
// de um $(function(){ /* código aqui */ });
// para que ele só execute o código quando a página
// carregar

// $(document).ready(function(){
$(function(){
	// Pegar elemento de ID Bloco, usando JavaScript
	// var bloco = document.getElementById("bloco");

	// Pegar elemento de ID Bloco, usando jQuery
	// var bloco = $("#bloco");

	// Exibe o bloco que foi pego
	// console.log(bloco);

	// Altera o conteúdo do bloco, usando código HTML
	// bloco.html("<b>Novo texto</b>");

	// Pegar blocos pela classe, usando JavaScript
	// var blocos = document.getElementsByClassName("blocos");
	var blocos = $(".blocos");

	// Exibir os blocos que foram pegos
	console.log(blocos);

	// Altera todos os textos dos blocos com classe .blocos,
	// usando jQuery
	// blocos.html("<b>Novo texto do bloco</b>");

	blocos.each(function(index){
		$(this).html("<b>Novo texto do bloco</b> " + (index + 1));
	});

	blocos.click(function(){
		$(this).fadeOut(3000, function(){
			alert("Acabou");
		});
	});

	// Altera o texto do primeiro bloco encontrado
	// blocos[0].innerText = "Novo texto do bloco 1";

	// Altera o texto do segundo bloco encontrado
	// blocos[1].innerText = "Novo texto do bloco 2";

	// for (var i = 0; i < blocos.length; i++) {
	// 	blocos[i].innerText = "Novo texto do bloco " + (i + 1);
	// }
});

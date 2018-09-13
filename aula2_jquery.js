// Só irá executar quando o document estiver carregado
$(function(){
	// Pegar elemento pelo ID, usando JavaScript
	// var bloco = document.getElementById("bloco");

	// Alterar o texto do elemento, usando JavaScript
	// bloco.innerText = "Novo texto do bloco.";

	// Pegar elemento pelo ID, usando jQuery
	// var bloco = $("#bloco");

	// Alterar o texto do elemento, usando jQuery
	// bloco.html("<b>Novo texto do bloco. - jQuery</b>");

	// Exibe o elemento que foi obtido
	// console.log(bloco);

	// Pegar todos os elementos pela classe, usando JavaScript
	// var blocos = document.getElementsByClassName("blocos");
	// console.log(blocos);
	//
	// for (var i = 0; i < blocos.length; i++) {
	// 	blocos[i].innerText = "Novo texto dos blocos.";
	// }

	// Mudar o texto de todos os blocos
	// $(".blocos").text("Novo texto dos blocos.");

	// Mudar o texto de todos os blocos
	// $(".blocos").click(function(){
	// 	$(this).text("Novo texto do bloco.");
	// });

	// Mudar o texto dos blocos, sabendo qual o index deles
	// $(".blocos").each(function(index, value){
	// 	$(this).text("Novo texto do bloco " + index);
	// });

	var esquerda = true;
	var duracao = 1500;

	$("#quadrado").click(function(){
		if (esquerda) {
			$(this).css("background", "green");
			$(this).stop().animate({
				"margin-left": "200px"
			}, duracao);
		} else {
			$(this).css("background", "red");
			$(this).stop().animate({
				"margin-left": "0"
			}, duracao);
		}

		esquerda = !esquerda;
	});
});

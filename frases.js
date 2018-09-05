var personagens = [
	{
		"nome": "Personagem 1",
		"id": "personagem_1",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	},
	{
		"nome": "Personagem 2",
		"id": "personagem_2",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	},
	{
		"nome": "Personagem 3",
		"id": "personagem_3",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	},
	{
		"nome": "Personagem 4",
		"id": "personagem_4",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	},
	{
		"nome": "Personagem 5",
		"id": "personagem_5",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	},
	{
		"nome": "Personagem 6",
		"id": "personagem_6",
		"frases": [
			"Frase 1",
			"Frase 2",
			"Frase 3"
		]
	}
];

var frasesDisponiveis = [];
for (var i = 0; i < personagens.length; i++) {
	var personagem = personagens[i];
	var frases = personagem.frases;

	// frasesDisponiveis = frasesDisponiveis.concat(frases);

	for (var j = 0; j < frases.length; j++) {
		var frase = {
			"personagem_id": personagem.id,
			"frase": frases[j]
		};
		frasesDisponiveis.push(frase);
	}
}

function sortearFraseAleatoria() {
	// var indiceAleatorio = Math.floor(Math.random() * personagens.length);
	// var personagemAleatorio = personagens[indiceAleatorio];

	// var frases = personagemAleatorio.frases;
	var indiceFraseAleatoria = Math.floor(Math.random() * frasesDisponiveis.length);
	var fraseAleatoria = frasesDisponiveis[indiceFraseAleatoria];

	var personagemAleatorio = fraseAleatoria.personagem_id;

	var blocoFraseAleatoria = document.getElementById("frase_aleatoria");
	blocoFraseAleatoria.innerText = fraseAleatoria.frase + " - Personagem " + personagemAleatorio;

	frasesDisponiveis.splice(indiceFraseAleatoria, 1);
	// console.log(frasesDisponiveis);

	return personagemAleatorio;
}

var personagemAleatorio = sortearFraseAleatoria();

var blocoFrases = document.getElementById("frases");
var blocosPersonagens = blocoFrases.getElementsByTagName("img");

var acertos = 0;
var blocoAcertos = document.getElementById("acertos");
var erros = 0;
var blocoErros = document.getElementById("erros");

var acertosNecessarios = 7;
var errosPermitidos = 7;

var blocoResultado = document.getElementById("resultado");

var jogoRodando = true;

function processarClique() {
	if (!jogoRodando)
		return;

	var personagemId = this.getAttribute("data-personagem_id");

	if (personagemId === personagemAleatorio) {
		acertos++;
		blocoAcertos.innerText = "Acertos: " + acertos;
	} else {
		erros++;
		blocoErros.innerText = "Erros: " + erros;
	}

	if (erros === errosPermitidos) {
		blocoResultado.innerText = "Você perdeu.";
		jogoRodando = false;
	}
	else if (acertos === acertosNecessarios) {
		blocoResultado.innerText = "Você ganhou.";
		jogoRodando = false;
	}
	else {
		personagemAleatorio = sortearFraseAleatoria();
	}
}

for (var i = 0; i < blocosPersonagens.length; i++) {
	blocosPersonagens[i].onclick = processarClique;
}

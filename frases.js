const Frase = function(frase, personagem) {
	this.frase = frase;
	this.personagem = personagem;
};

const Personagem = function(nome, id, ...frases) {
	this.nome = nome;
	this.id = id;
	this.frases = [];

	frases.forEach(function(frase) {
		this.frases.push(new Frase(frase, this));
	}.bind(this));
};

const personagens = [
	new Personagem("Personagem 1", "personagem_1", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 2", "personagem_2", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 3", "personagem_3", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 4", "personagem_4", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 5", "personagem_5", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 6", "personagem_6", "Frase 1", "Frase 2", "Frase 3")
];


let frasesDisponiveis = [];

personagens.forEach(personagem => {
	let frases = personagem.frases;

	frases.forEach(frase => {
		frasesDisponiveis.push(new Frase(frase, personagem.id));
	});
});

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

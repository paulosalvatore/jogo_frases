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

const Helper = function() {
	this.sortearPersonagem = function(personagens) {
		return personagens[Math.floor(Math.random() * personagens.length)];
	};

	this.sortearFrase = function(frases) {
		return frases[Math.floor(Math.random() * frases.length)];
	};

	this.removerFrase = function(frases, indice) {
		frases.splice(indice, 1);
	};

	this.adicionarFrase = function(array, valor) {
		array.push(valor);
	};

	this.editarTexto = function(elemento, texto) {
		elemento.appendChild(document.createTextNode(texto));
	};
};

const helper = new Helper();

const personagens = [
	new Personagem("Personagem 1", "personagem_1", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 2", "personagem_2", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 3", "personagem_3", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 4", "personagem_4", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 5", "personagem_5", "Frase 1", "Frase 2", "Frase 3"),
	new Personagem("Personagem 6", "personagem_6", "Frase 1", "Frase 2", "Frase 3")
];

const elemento = {
	bloco: {
		fraseAleatoria: document.getElementById("frase_aleatoria"),
		frases: document.getElementById("frases"),
		personagens: document.getElementsByTagName("img"),
		acertos: document.getElementById("acertos"),
		erros: document.getElementById("erros"),
		resultado: document.getElementById("resultado")
	}
};

let personagemAleatorio = helper.sortearPersonagem(personagens);
let fraseAleatoria = helper.sortearFrase(personagemAleatorio.frases);

helper.editarTexto(
	elemento.bloco.fraseAleatoria,
	`${fraseAleatoria.frase} - Personagem ${personagemAleatorio.id}`
);

let acertos = 0;
let erros = 0;

let acertosNecessarios = 7;
let errosPermitidos = 7;

let jogoRodando = true;

function processarClique() {
	if (!jogoRodando) return;

	let personagemId = this.getAttribute("data-personagem_id");

	if (personagemId === personagemAleatorio) {
		acertos++;
		helper.editarTexto(elemento.bloco.acertos, `Acertos: ${acertos}`);
	} else {
		erros++;
		helper.editarTexto(elemento.bloco.erros, `Erros: ${erros}`);
	}

	if (erros === errosPermitidos) {
		helper.editarTexto(elemento.bloco.resultado, "Você perdeu.");
		jogoRodando = false;
	}
	else if (acertos === acertosNecessarios) {
		helper.editarTexto(elemento.bloco.resultado, "Você ganhou.");
		jogoRodando = false;
	}
	else {
		personagemAleatorio = helper.sortearPersonagem(personagens);
	}
}

for (personagem in elemento.bloco.personagens) {
	personagem.onclick = processarClique;
}

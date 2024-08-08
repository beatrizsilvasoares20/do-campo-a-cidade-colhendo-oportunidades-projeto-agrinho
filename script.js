const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " quanto tempo dura a plantaçao do feijao ",
        alternativas: [
            {
                texto: "65 dias!",
                afirmacao: "afirmação"
            },
            {
                texto: "50 dias!" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "em que tipo de terra o feijao se desenvolve",
        alternativas: [
            {
                texto: "em terra seca .",
                afirmacao: "afirmação"
            },
            {
                texto: "em solos soltos, fofos, bem areados.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: "quando se inicia a colheita",
        alternativas: [
            {
                texto: "de 60 a 100 dias.",
                afirmacao: "afirmação"
            },
            {
                texto: "de 100 a 120 dias.",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "qual a distância de um pé de feijao para outro",
        alternativas: [
            {
                texto: "40 a 50 cm.",
                afirmacao: "afirmação"
            },
            {
                texto: "20 a 30 cm.",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "quantos feijoes se coloca por cada buraco",
        alternativas: [
            {
                texto: "3 a 4 sementes.",
                afirmacao: "afirmação"
            },
            {
                texto:"2 sementes",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "obrigado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

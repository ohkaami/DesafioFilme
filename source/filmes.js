
const filmes = [
  {
    nome: "Minha mãe é uma peça",
    avaliacoes: [5, 4, 4, 4, 5]
  },
  {
    nome: "Saneamento Básico",
    avaliacoes: [3, 4, 2, 3, 4]
  },
  {
    nome: "Se eu fosse você",
    avaliacoes: [1, 2, 3]
  }
];

function avaliarFilmes(listaFilmes) {
  return listaFilmes.map((filme) => {
    const votos = filme.avaliacoes.length;

    const soma = filme.avaliacoes.reduce(
      (total, nota) => total + nota, 0
    );

    const media = votos > 0 ? soma / votos : 0;

    let classificacao;

    if (media >= 4) {
      classificacao = "Filme recomendado";
    } else if (media >= 3) {
      classificacao = "Filme razoável";
    } else {
      classificacao = "Filme ruim";
    }

    return {
      nome: filme.nome,
      votos: votos,
      media: media,
      classificacao: classificacao
    };
  });
}

module.exports = { avaliarFilmes, filmes };

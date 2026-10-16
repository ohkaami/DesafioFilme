
const assert = require("node:assert/strict");
const { avaliarFilmes } = require("../source/filmes");

describe("Testes de avaliação de filmes", function () {

  // TESTE 1 - Filme recomendado
  it("Deve classificar um filme com média >= 4 como recomendado", function () {

    const filmes = [
      {
        nome: "Minha mãe é uma peça",
        avaliacoes: [5, 4, 4, 4, 5]
      }
    ];

    const resultado = avaliarFilmes(filmes);

    assert.equal(resultado[0].votos, 5);
    assert.equal(resultado[0].media, 4.4);
    assert.equal(resultado[0].classificacao, "Filme recomendado");

  });

  // TESTE 2 - Filme razoável
  it("Deve classificar um filme com média >= 3 e < 4 como razoável", function () {

    const filmes = [
      {
        nome: "Saneamento Básico",
        avaliacoes: [3, 4, 2, 3, 4]
      }
    ];

    const resultado = avaliarFilmes(filmes);

    assert.equal(resultado[0].votos, 5);
    assert.equal(resultado[0].media, 3.2);
    assert.equal(resultado[0].classificacao, "Filme razoável");

  });

  // TESTE 3 - Filme ruim
  it("Deve classificar um filme com média < 3 como ruim", function () {

    const filmes = [
      {
        nome: "Se eu fosse você",
        avaliacoes: [1, 2, 3]
      }
    ];

    const resultado = avaliarFilmes(filmes);

    assert.equal(resultado[0].votos, 3);
    assert.equal(resultado[0].media, 2);
    assert.equal(resultado[0].classificacao, "Filme ruim");

  });

});

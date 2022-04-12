const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

function fantasyOrScienceFictionAuthors() {
  const generoFF = ["Ficção Científica", "Fantasia"];
  const imprimirFF = books
    .filter((livrosFF) => generoFF.includes(livrosFF.genre))
    .map((livrosFF) => livrosFF.author.name)
    .sort();
  console.log(imprimirFF);
}
fantasyOrScienceFictionAuthors();

/* FUNÇAO ANTERIOR UTILIZANDO FILTER */
/*   function fantasyOrScienceFictionAuthors() {
    let generoFiccao = books.filter ((ficcao) => ficcao.genre === 'Ficção Científica')
    autorFiccao = generoFiccao.author.name;
    let generoFantasia = books.filter ((fantasia) => fantasia.genre === 'Fantasia')
    autorFantasia = generoFantasia.author.name;
    ficcaoFantasia = autorFiccao + autorFantasia
    .sort((a, b) => (a.ficcaoFantasia) - (b.ficcaoFantasia));
    console.log(autorFF);
  }
  fantasyOrScienceFictionAuthors(); */

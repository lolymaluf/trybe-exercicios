const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  const expectedResult = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];

  /* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

Dica: use a função filter ; */
  
  function fantasyOrScienceFiction() {
    let generoFiccao = books.filter ((ficcao) => ficcao.genre === 'Ficção Científica');
    let generoFantasia = books.filter ((fantasia) => fantasia.genre === 'Fantasia')
    ficcaoFantasia = Array.prototype.concat(generoFantasia, generoFiccao);
    console.log(ficcaoFantasia);
  }
  fantasyOrScienceFiction();

  /* Sempre usar a variavel para chamar o objeto depois que você a cria. Não mais o nome do objeto lá de cima */
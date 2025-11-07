// seeds/001_populate_points.js

exports.seed = async function (knex) {
  // Limpa a tabela points (estratégia: delete + reset sequence)
  await knex('points').del();
  await knex.raw('ALTER SEQUENCE points_id_seq RESTART WITH 1');

  // Insere pontos de teste dos três livros
  await knex('points').insert([
    // Caminho (5 pontos de exemplo)
    {
      book: 'caminho',
      number: 1,
      text: 'Não deixes para amanhã a boa obra que podes fazer hoje. — Podes morrer esta noite.'
    },
    {
      book: 'caminho',
      number: 2,
      text: 'Tens obrigação de santificar-te. — Tu também. — Não é só dos outros o caminho da santidade.'
    },
    {
      book: 'caminho',
      number: 3,
      text: 'Não tenhas medo da Cruz. É doloroso subir ao Calvário... Mas que alegria "ressuscitar"!'
    },
    {
      book: 'caminho',
      number: 4,
      text: 'Que grandeza viver a vida divina! — Pede a Deus que tenhas "fome" dessa vida.'
    },
    {
      book: 'caminho',
      number: 5,
      text: 'Se és de Cristo, deves viver como Cristo: pobre, casto e obediente.'
    },

    // Sulco (5 pontos de exemplo)
    {
      book: 'sulco',
      number: 1,
      text: 'A santidade não é questão de idade. A santidade é questão de correspondência à graça.'
    },
    {
      book: 'sulco',
      number: 2,
      text: 'Luta sempre, ainda que te sintas derrotado: do teu combate heróico nascerão luzes novas para a Igreja e para a humanidade.'
    },
    {
      book: 'sulco',
      number: 3,
      text: 'Se queres ser apóstolo, não basta que ames: é necessário que cada uma das tuas palavras queime.'
    },
    {
      book: 'sulco',
      number: 4,
      text: 'A vida interior é como um fogo: se não se alimenta, apaga-se.'
    },
    {
      book: 'sulco',
      number: 5,
      text: 'O Amor de Deus não é compatível com a vida cômoda.'
    },

    // Forja (5 pontos de exemplo)
    {
      book: 'forja',
      number: 1,
      text: 'Procura viver de tal modo que, quando outros te vejam, aprendam como é belo ser cristão.'
    },
    {
      book: 'forja',
      number: 2,
      text: 'O segredo está em viver sempre na presença de Deus. Então, tudo o que fazemos se converte em oração.'
    },
    {
      book: 'forja',
      number: 3,
      text: 'A alegria nasce da consciência da filiação divina. Somos filhos de Deus!'
    },
    {
      book: 'forja',
      number: 4,
      text: 'Não desanimes. São Pedro também negou Cristo, e acabou sendo Santo.'
    },
    {
      book: 'forja',
      number: 5,
      text: 'A cruz não se carrega aos poucos: ou se aceita inteira ou se rechaça.'
    }
  ]);

  console.log('✅ Seeds executados: 15 pontos inseridos (5 de cada livro)');
};
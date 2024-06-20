var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email  FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(jogo, personagem, nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", jogo, personagem, nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario(jogoFavorito, personagemFavorito, nome, email, senha) values
        ('${jogo}', '${personagem}', '${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibicaoJogo(){
    var instrucaoSql = `
        select jogoFavorito from usuario;
    `;

    return database.executar(instrucaoSql);
}

function exibicaoPersonagem(){
    var instrucaoSql = `select personagemFavorito from usuario`;

    return database.executar(instrucaoSql);
}

/*
[
    {jogoFavorito: 're2'},
    {jogoFavorito: 're3'},
    {jogoFavorito: 're2'},
]
*/

module.exports = {
    autenticar,
    cadastrar,
    exibicaoJogo,
    exibicaoPersonagem
};
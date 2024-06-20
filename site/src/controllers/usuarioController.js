var usuarioModel = require("../models/usuarioModel");
//var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);


                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                id: resultadoAutenticar[0].id,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha
                            });
                        } else {
                            res.status(204).json({ aquarios: [] });
                        }

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var jogo = req.body.jogoServer;
    var personagem = req.body.personagemServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (jogo == undefined) {
        res.status(400).send("Seu Jogo Favorito está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Seu Personagem Favorito está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(jogo, personagem, nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function exibicaoJogo(req, res) {
    usuarioModel.exibicaoJogo()
        .then(function (resultado) {
            if (resultado.length >= 1) {
                var re2 = 0;
                var re3 = 0;
                var re4 = 0;

                for (var index = 0; index < resultado.length; index++) {
                    if (resultado[index].jogoFavorito == 'Resident Evil 2 Remake') {
                        re2 = re2 + 1;
                    }
                    else if (resultado[index].jogoFavorito == 'Resident Evil 3 Remake') {
                        re3 = re3 + 1;
                    } else {
                        re4 = re4 + 1;
                    }
                }

                res.json({
                    contagem_re2: re2,
                    contagem_re3: re3,
                    contagem_re4: re4
                })
            } else {
                throw "Sem jogos favoritados"
            }
        })
        .catch(
            function (erro) {
                console.error(erro);
            }
        )
}

function exibicaoPersonagem(req, res) {
    usuarioModel.exibicaoPersonagem()
        .then(function (resultado) {
            if (resultado.length >= 1) {

                var Leon = 0
                var Claire = 0
                var Jill = 0
                var Ada = 0
                var Luis = 0
                var Ashley = 0
                var Carlos = 0
                var Sherry = 0

                for (var index = 0; index < resultado.length; index++) {
                    if (resultado[index].personagemFavorito == 'Leon') {
                        Leon = Leon + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Claire') {
                        Claire = Claire + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Jill') {
                        Jill = Jill + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Ada') {
                        Ada = Ada + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Luis') {
                        Luis = Luis + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Ashley') {
                        Ashley = Ashley + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Carlos') {
                        Carlos = Carlos + 1;
                    }
                    else if (resultado[index].personagemFavorito == 'Sherry') {
                        Sherry = Sherry + 1;
                    }
                }

                console.log(`Resultados: ${Leon} ${Claire} ${Jill} ${Ada} ${Luis} ${Ashley} ${Carlos} ${Sherry}`)

                res.json({
                    contagem_Leon: Leon,
                    contagem_Claire: Claire,
                    contagem_Jill: Jill,
                    contagem_Ada: Ada,
                    contagem_Luis: Luis,
                    contagem_Ashley: Ashley,
                    contagem_Carlos: Carlos,
                    contagem_Sherry: Sherry
                })
            } else {
                throw "Sem personagens favoritados"
            }
        })
        .catch(
            function (erro) {
                console.error(erro);
            }
        )
}

module.exports = {
    autenticar,
    cadastrar,
    exibicaoJogo,
    exibicaoPersonagem
}
import { request, response } from "express";

const express = require("express");
const app = express();
const port = 3333

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica 
 */

app.get('/', (request,response) => {
    return response.json({
        mensagem: "Olá NLW 05"
    });
});

app.post('/', (request,response) => {
    return response.json({
        mensagem: "usúario criado com sucesso!"
    });
});

app.listen(port, () => console.log(`server rodando na porta http://localhost:${port}`))
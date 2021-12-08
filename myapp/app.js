const express = require('express');
const app = express();
const port = 3001;

///const playlists {

//};

app.get('/', (req, res) => {
    res.send('Meu deus nam!')
});

//1. Listagem das playlists

app.get("/playlists", (req, res) => {
    return res.json(playlists);
});

//2. Detalhe de uma playlist - GET 

app.get("/playlists", (req, res) => {
    return res.json(playlists);
});

app.listen(port, () => {
    console.log(`Servidor rodando!`)
});
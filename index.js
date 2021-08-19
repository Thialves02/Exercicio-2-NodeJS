const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const jogos = [
    'FIFA 21',
    'Counter Strike',
    'Doom Eternal',
    'Rainbow Six',
    'Refunct',
    'Valorant'
]

app.get('/', (req, res) => {
    res.send('Bem vindo a página de jogos');
})

//LER
app.get('/jogos', (req, res) => {
    res.send(jogos);
})

app.get('/jogos/:id', (req, res) => {
    const id = req.params.id -1;
    const jogo = jogos[id];
    if (!jogo){
        res.send('Jogo não encontrado')
    }
    res.send(jogo);
})

//CRIAR
app.post('/jogos', (req, res) => {
    const id = jogos.length +1;
    const jogo = req.body.jogo;
    jogos.push(jogo);
    res.send(`O jogo ${jogo} foi adicionado com ID ${id}`);
})

//ATUALIZAR
app.put('/jogos/:id',(req, res)=>{
    const id = req.params.id -1;
    const jogo = req.body.jogo;
    jogos[id] = jogo;
    res.send(`O jogo de ID ${id} foi atualizado, o nome agora é ${jogo}`)
})

//DELETAR
app.delete('/jogos/:id',(req, res)=>{
    const id = req.params.id -1;
    const jogo = jogos[id]
    if(!jogo){
        res.send('Nenhum jogo encontrado...')
    }
    delete jogos[id];
    res.send(`O jogo ${jogo} foi deletado com sucesso!`);
})


app.listen(port,()=> {
    console.log(`Servidor rodando na porta ${port}`)
})


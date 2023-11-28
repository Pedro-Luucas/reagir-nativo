const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/gerar', (req, res) => {
    let pass = req.body.senha;
    res.json({senha: pass});
}
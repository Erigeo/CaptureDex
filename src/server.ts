const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/api/submit-form', (req, res) => {
  const formData = req.body;
  // Lógica para processar os dados do formulário aqui
  res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

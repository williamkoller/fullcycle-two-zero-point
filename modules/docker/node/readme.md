# Praticando com docker

- rodando imagem node sem dockerfile

```
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
```

- acessando a pasta app

```
cd /usr/src/app
```
- iniciando o package-json
```
npm init -y
```
- instalando o express
```
npm i express --save
```
- criando o index.js
```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send('<h1>Full Cycle</h1/');
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
```
- rodando o node
```
node index.js
```
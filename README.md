# Sobre o projeto

Projeto simples de CRUD criado para o tesde de desenvolvedor fullstrack da Tinnova, utilizando a linguagem ReactJS.
No projeto podemos criar, editar, visualizar e excluir os dados manipulando diretamente o arquivo db.json, onde estão salvos os dados que serão apresentados na tela.
Foi utilizado o bootstrap do "create react app" no projeto, para saber mais acesse: [Create React App](https://github.com/facebook/create-react-app).

## Como executar o projeto?

Esse projeto utiliza os seguintes comandos:

### `npm i`

Comando básico para a instalação das dependências do projeto.

### `npm start`

Roda o app em modo de desenvolvimento.
Basta acessar [http://localhost:3000](http://localhost:3000) para ver o site.

A página é atualizada todas as vezes que o projeto é salvo com o comando rodando
Pode-se ver também erros de sintaxe no console da IDE.

### `npx json-server --watch db.json --port 8000`

Esse comando é utilizado para subir o server e povoar o sistema com os dados já pré-preenchidos e também salvar novos dados no sistema.

### `npm test`

Roda o ambiente de testes interativos
Para saber mais sobre a sessão de testes, acesse o site: [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Faz o build do app para a pasta `build`.
Ideal para os arquivos ficarem prontos para o deploy, o build minifica os arquivos e aumenta a performance deles.

Para saber mais sobre o build, acesse o site: [deployment](https://facebook.github.io/create-react-app/docs/deployment).

# Books API

Esta app tem como objetivo botar em prática os conceitos da clean architecture. Para facilitar o entendimento, este projeto se trata de uma API simples
escrita em TypeScript.

## Caso de uso:
[+] Listar todos os livros cadastrados, contendo:
- Quantidade de livros disponíveis no estoque
- Informações sobre o livro -> nome, assunto, descrição, autor, preço
- Informações do fornecedor do livro -> razão social, número de telefone, endereço, cep, cnpj

## Como iniciar a API?
Execute os comandos a seguir:
```bash
$ npm i
$ npm run build
$ npm run start
```

Para acessar a rota de listagem de livros, acesse: http://localhost:9000/api/books.<br>
Caso queira ver o resultado usando seu terminal sem precisar abrir o browser,
execute o comando:
```sh
$ curl http://localhost:9000/api/books
```
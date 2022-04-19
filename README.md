<h1 align="center">
  Desafio 4 Linux
</h1>

<p align="center">
    Desafio para vaga de emprego na empresa 4Linux!
</p>

<p align="center">
  <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFRD_LpfY1iZw/company-logo_200_200/0/1620045342168?e=2147483647&v=beta&t=Zc3lt3gvGd9CJqyUz8qsaJNIYnev_koRqPBajgDQlys">
</p>

## Sobre

Começamos com a tela de login simples, onde a validação dela está sendo rodada em uma API com MongoDB e como validação o JWT.
![Isso é uma imagem](https://i.imgur.com/IwJs2BA.png)

Quando o usuário clica em entrar é feito uma validação no banco de dados com os dados que o usuário digitou no input, sendo que se tiver algum erro, a API retorna o erro especifico e retorna para o front.

![Isso é uma imagem](https://i.imgur.com/lcqDctj.png)

Quando der match com o usuário e a senha, um token JWT é gravado no localStorage e dai é feito a validação: se o usuário estiver com um token válido no localStorage, ele não precisa ficar na tela de login, redirecione ele direito para a home, localizada na rota "/".

E depois que o usuário já foi autenticado, é exibido cards com um retorno de uma Public API.

![Isso é uma imagem](https://i.imgur.com/h8OmY6T.png)

## Dificuldades

Inicialmente eu iria fazer o projeto com o firebase, como eu já tenho o conhecimento e ele tem funções prontas de auth, facilitaria muito todo o processo, mas a parte de autenticação deles só aceita email e senha, e no caso do sistema, seria usuário e senha, então optei para uma construção de API.
Ao longo do desenvolvimento do desafio, o ponto que tive mais dificuldade foi na parte de como eu poderia validar o login e como eu poderia limitar as rotas de acordo com a autenticação do usuário.

## Construído com

- [React.js](https://pt-br.reactjs.org/) - Framework web usado
- [MongoDB](https://www.mongodb.com/pt-br) - No banco de dados para salvar os usuários
- [Express](https://expressjs.com/pt-br/) - Construção da API de autenticação
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) - Gerenciamento de rotas
- [JSON Web Tokens](https://jwt.io/) - Usado na validação do login

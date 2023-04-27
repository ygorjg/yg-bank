Aplicação desenvolvida em React e TypeScript. Front-end para um banco digital fictício.

Nela o usuário é capaz de criar uma conta, fazer login e acessar a dashboard que ainda está em construção, onde será possível fazer transações para outros usuários, visualizar as transações efetuadas, entre outras funcionalidades.

Blibliotecas utilizadas:

- React-Router-Dom,
- React-Hook-Form,
- Yup,
- React-Toastify,
- Axios,
- Styled-Components

A aplicação está em produção no link: https://ygbank.vercel.app/

Figma utilizado como base: https://www.figma.com/file/aNvPD1kDTfO6SnFfmK0MAq/Untitled?node-id=0%3A1&t=CAQmOO3oLt1nWwQv-1

API em produção: https://api-ngcash.herokuapp.com/ (ENDPOINTS /users para criar conta e /login para logar o usuário)

REQUESTS: /USERS & /LOGIN 
```
{
    "username": "ygor12345",
    "password": "12345678A!"
}
```

RESPONSE: /USERS
```
{
	"message": "Created user",
	"data": {
		"username": "ygor12345",
		"id": "4b1fcd33-b57e-4529-bb24-2b1789aac14d"
	}
}
```

RESPONSE: /LOGIN
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2YjNiNmFhLWY5NDUtNDU3YS05YzRlLWQzZmJiZGZlNjFlYiIsImlhdCI6MTY2ODkzMjI4NCwiZXhwIjoxNjY5MDE4Njg0LCJzdWIiOiJ5Z29yIn0.iCr9sOlQ70tyHAbiltKljWot73bDBhbYMjypGVg9l5M"
}
```

A API está hospedada no heroku e ele deixará de ser gratuito dia 24/11, acredito que a API irá sair do ar nesse dia.

Instruções:

Instalar as dependências do Yarn. (yarn install)

Para rodar a aplicação. (yarn start)

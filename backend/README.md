Aplicação desenvolvida em Node (Express), TypeScript, PostgreSQL e TypeORM. Back-end para um banco digital fictício.

Nela o usuário é capaz de criar uma conta, fazer login e em breve poderá fazer transações para outros usuários, entre outras funcionalidades.

Blibliotecas utilizadas:

- bcrypt,
- jsonwebtoken,
- class-transformer

A aplicação está em produção no link: https://ygbank.vercel.app/

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

Instalar as dependências do Yarn antes de rodar o projeto. (yarn install)

Obs: 

LinkedIn: https://www.linkedin.com/in/ygor-jose

E-mail: ygorjgr@gmail.com
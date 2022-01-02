# progtutor-server
# Como executar localmente

Para executar a aplicação completa localmente, siga as intruções a seguir:

### Pré-requisitos:

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

```
NodeJS - Versão: 16.x.x
PostgreSQL - Versão: 14.x
```

Por padrão, o usuário, senha e nome do banco estão definidos como `postgres`, caso essas configurações não sejam as mesmas do seu ambiente, altere as variáveis `USER_DB`, `PWD_DB`  e `NAME_DB` no arquivo [***src/.env***](/src/server/.env)

Além disso é bom ter um editor para trabalhar com o código como VSCode.

## Instalando

1. Na pasta [***src***](/src/server), execute os comandos abaixo: <br>

```
npm install ou npm i (instala as dependências do projeto)
npm run db (cria as tabelas no banco de dados)
npm run dev (executa a aplicação)
```

Então a aplicação ficará disponível em [localhost:3000](http://localhost/3000)
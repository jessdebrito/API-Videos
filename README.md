# API de filmes e séries

Deve ser possível cadastrar, atualizar, excluir, ler de forma múltipla e individual.
Deverão existir filtros por gênero e busca por título

### Entidade:
* id - númerico 
* title - texto
* description - text 
* genre - text 
* video - text 
* createdAt - data 
* updatedAt - data

### Rotas: 
* /movies
* POST / 
* PATCH /:id
* DELETE /:id
* GET / (queryParams: search e genre) 
* GET /:id

## Instalados no início

### Start Node
    npm init -y

### Instalar Express
    npm install express

### Instalação de TypeScript

    npm install -D typescript ts-node-dev @types/express

### Criar e depois inportar ts config
    npx tsc --init
# Programação para Web 2 — Atividades

### 1. Backend de Categorias — Laravel MVC e Node.js/Express

Desenvolvimento de funcionalidades para gerenciamento e consulta de categorias em aplicações web utilizando Laravel e Node.js com Express.

**Implementações:**
- Criação de rotas para listagem e visualização de categorias.
- Desenvolvimento do `CategoriaController` no Laravel.
- Criação das views `index` e `show` utilizando Blade.
- Implementação dos endpoints `GET /api/categorias` e `GET /api/categorias/:id`.
- Associação entre categorias e produtos.
- Tratamento de erros para categorias inexistentes (HTTP 404).
- Integração com interfaces frontend.

**Tecnologias:**
- PHP
- Laravel
- Node.js
- Express
- JavaScript
- React
- Docker

---

### 2. CRUD de Projetos — NestJS

Implementação de um novo recurso CRUD de Projetos em uma aplicação backend desenvolvida com NestJS, seguindo a arquitetura utilizada anteriormente no gerenciamento de tarefas.

**Implementações:**
- Criação de módulo, controller e service.
- Desenvolvimento da entidade `Projeto`.
- Implementação das operações CRUD.
- Criação de DTOs para recebimento e validação dos dados.
- Validação de campos utilizando `class-validator`.
- Utilização de `ValidationPipe`.
- Tratamento de exceções com `NotFoundException`.
- Testes dos endpoints utilizando Postman.

**Tecnologias:**
- Node.js
- TypeScript
- NestJS
- class-validator
- class-transformer
- Postman

---

### 3. Integração com PostgreSQL utilizando TypeORM

Integração do backend desenvolvido com NestJS a um banco de dados PostgreSQL, substituindo o armazenamento em memória por persistência de dados utilizando TypeORM.

**Implementações:**
- Configuração do PostgreSQL utilizando Docker Compose.
- Integração do TypeORM com NestJS.
- Mapeamento de entidades para tabelas utilizando decorators.
- Configuração da conexão com o banco de dados.
- Criação e execução de migrations.
- Implementação de Seeder para inserção de dados iniciais.
- Utilização do Repository do TypeORM.
- Operações assíncronas de consulta, criação, atualização e exclusão.
- Persistência dos dados mesmo após reiniciar o servidor.

**Tecnologias:**
- Node.js
- TypeScript
- NestJS
- PostgreSQL
- TypeORM
- Docker
- Docker Compose

---

### 4. Autenticação e Segurança de APIs — JWT e NestJS

Implementação de um sistema de autenticação e autorização em uma API REST desenvolvida com NestJS, utilizando JSON Web Token (JWT) e cookies httpOnly para proteger o acesso aos recursos da aplicação.

**Implementações:**
- Criação da entidade `User` para armazenamento dos usuários no PostgreSQL.
- Desenvolvimento do módulo `UsersModule` e do serviço `UsersService`.
- Implementação de cadastro e login de usuários.
- Criptografia (hash) de senhas utilizando `bcryptjs`.
- Geração e validação de tokens JWT.
- Armazenamento do token em cookies `httpOnly`.
- Configuração de cookies com propriedades `sameSite`, `secure` e `maxAge`.
- Criação da estratégia `JwtStrategy` para autenticação utilizando Passport.
- Implementação do `JwtAuthGuard` para proteger rotas.
- Utilização do identificador `sub` do JWT para identificar o usuário no servidor.
- Implementação de logout com remoção do cookie de autenticação.
- Proteção das rotas de tarefas, permitindo acesso somente a usuários autenticados.
- Validação de credenciais e tratamento de erros de autenticação.
- Testes de cadastro, login, logout e rotas protegidas utilizando Postman.
- Integração do sistema de autenticação com o frontend.

**Endpoints implementados:**

| Método | Rota | Funcionalidade |
|---|---|---|
| POST | `/api/auth/register` | Cadastro de usuários |
| POST | `/api/auth/login` | Autenticação e geração do JWT |
| POST | `/api/auth/logout` | Encerramento da sessão |
| GET | `/api/auth/me` | Consulta do usuário autenticado |
| GET | `/api/tarefas` | Listagem protegida de tarefas |

**Tecnologias:**
- Node.js
- TypeScript
- NestJS
- PostgreSQL
- TypeORM
- JWT (JSON Web Token)
- Passport
- bcryptjs
- cookie-parser
- Docker
- Postman

---

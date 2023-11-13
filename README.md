# Título do Trabalho: Agenda Online

Repositório para hospedar o projeto desenvolvido para 'Desenvolvimento Web I', uma disciplina do curso de Informática do ano 2023 da Universidade da Maia. Desenvolvido pelo Grupo inf23dw1g24.

## Descrição Breve do Tema
O projeto "Agenda Online" é uma aplicação web que permite aos utilizadores gerir as suas tarefas e compromissos de forma eficiente. Esta aplicação possibilita a criação, visualização, atualização e eliminação de eventos num calendário digital, sendo desenvolvida com uma arquitetura REST, Node.js e MySQL, e hospedada num ambiente de contentorização utilizando Docker.

## Requisitos e Funcionalidades

### Arquitetura REST e CRUD
- Implementação de uma API REST com operações CRUD para gerir eventos.
- Utilização dos quatro verbos HTTP (GET, POST, PUT, DELETE).

### Recursos Disponíveis
- **Utilizadores**: Gestão de contas.
- **Eventos**: Adicionar, visualizar, modificar e remover eventos.
- **Lembretes**: Configuração para eventos futuros.
- **Categorias**: Classificação de eventos.

### Relação de Cardinalidade 1:n
- Relacionamento de um para muitos entre utilizadores e eventos.

### Representação em JSON
- Dados da API enviados e recebidos em JSON.

### Documentação com OpenAPI 3.0
- Documentação da API no formato OpenAPI 3.0.

### Postman Collection
- Coleção no Postman para testar a API.

### Banco de Dados MySQL
- MySQL para armazenamento de dados.

### Configuração Multi-Container
- Projeto em ambiente multi-container com Docker.

### Filtros via Parâmetros HTTP
- Filtros para busca de eventos.

### Relação de Cardinalidade m:n (Opcional)
- Associação de eventos a múltiplas categorias.

## Entrega e Apresentação
- Submissão de desenvolvimento e documentação através do portal da disciplina e GitHub.
- Apresentação prática da aplicação e suas funcionalidades.

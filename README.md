# Desafios do Basico ao Avançado

## Básico – Focar na Sintaxe e Tipagem

### Conversor de Moedas ✅
Crie uma API que converte valores entre diferentes moedas.
- Use classes e interfaces para estruturar os dados.
- Exemplo: `GET /convert`

### Validador de CPF e CNPJ
Implemente funções para validar CPF e CNPJ no cadastro de usuários.
- Utilize regex e narrowing types para diferenciar os formatos.

### Gerador de Números Aleatórios com Regras
Crie uma função que gera números aleatórios dentro de uma faixa definida.
- Permita personalizar:
  - Apenas números pares
  - Apenas números primos
  - Números com múltiplos dígitos específicos

### API de Frases Motivacionais
Crie um endpoint que retorna frases aleatórias de um banco de dados JSON.
- Tipifique corretamente os retornos da API.
- Exemplo: `GET /frase` retorna `{ autor: "Albert Einstein", texto: "A vida é como andar de bicicleta..." }`

### Média de Notas com TypeScript
Implemente uma função que recebe um array de notas (`number[]`) e retorna a média.
- Se houver alguma nota inválida, dispare um erro usando Union Types (`number | string`).

## 🚀 Intermediário – Trabalhar com APIs e Banco de Dados

### CRUD de Usuários com PostgreSQL
Desenvolva um CRUD para cadastro de usuários.
- Utilize um ORM como Prisma ou TypeORM.
- Exemplo de rotas:
  - `POST /usuarios` → Cadastra um usuário
  - `GET /usuarios/:id` → Retorna um usuário pelo ID
  - `PUT /usuarios/:id` → Atualiza dados
  - `DELETE /usuarios/:id` → Remove o usuário

### Autenticação JWT + Refresh Token
Crie um sistema de autenticação que:
- Gera JWT no login.
- Usa refresh tokens para renovar a sessão sem precisar logar de novo.
- Protege rotas privadas com middleware.

### Sistema de Votação em Enquetes
Desenvolva um sistema onde usuários podem criar enquetes e outros podem votar.
- Evite votos duplicados (cada usuário pode votar apenas uma vez).
- Exemplo: `POST /enquete` cria uma nova enquete, `POST /voto/:id` adiciona um voto.

### Envio de Emails
Crie uma API que envia e-mails para usuários.
- Use Nodemailer + Ethereal Email para testes.
- Adicione templates HTML com handlebars ou EJS.

### Upload e Processamento de Arquivos
Desenvolva um sistema para upload de imagens e PDFs.
- Armazene no Amazon S3 ou localmente.
- Gere uma versão reduzida da imagem para thumbnails.

## 💡 Avançado – Performance, WebSockets e Tarefas Assíncronas

### Chat em Tempo Real com WebSockets
Implemente um chat com Socket.io onde usuários podem conversar em salas.
- Exemplo: `JOIN room-x`, `SEND message`, `RECEIVE message`.

### Sistema de Agendamentos com Filas (BullMQ)
Crie um sistema onde usuários agendam tarefas para execução futura.
- Utilize BullMQ para gerenciar filas no Redis.
- Exemplo: Enviar e-mail X minutos depois de um evento.

### API para Monitoramento de Logs
Crie uma API que recebe logs de aplicações externas e exibe gráficos sobre erros mais comuns.
- Use WebSockets para atualizar a interface em tempo real.

### API GraphQL
Crie uma API GraphQL para gerenciar produtos de um e-commerce.
- Adicione queries para listar produtos e mutations para criar/editar/excluir.

### Sistema de Notificações em Tempo Real
Desenvolva um sistema onde os usuários recebem notificações instantâneas.
- Use WebSockets + Banco de Dados para armazenar histórico.

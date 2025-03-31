# Exercicio

**Descrição:**
Este projeto consiste em um aplicativo web com frontend e backend separados. O frontend foi desenvolvido utilizando React com TypeScript, enquanto o backend foi construído com Node.js e Prisma.

## Estrutura do Projeto

- `frontend/`: Contém o código-fonte do frontend.
- `backend/`: Contém o código-fonte do backend.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: 14.x ou superior)
- Gerenciador de pacotes npm (instalado junto com o Node.js)

## Configuração do Backend

1. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

4. Inicie o servidor:

   ```bash
   node server.js
   ```

   O servidor estará ouvindo na porta 3000.

5. (Opcional) Para visualizar e gerenciar o banco de dados com Prisma Studio:

   ```bash
   npx prisma studio
   ```

## Configuração do Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O aplicativo estará acessível em `http://localhost:5173`.

## Observações

- Certifique-se de que o backend esteja em execução antes de iniciar o frontend para garantir a comunicação adequada entre os serviços.
- Para mais detalhes sobre a estrutura do projeto, consulte os arquivos `README.md` nos diretórios `frontend/` e `backend/`.
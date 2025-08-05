# 🚀 TorqueSync Frontend - A Interface de Gestão

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Este é o repositório oficial do frontend para o projeto **TorqueSync**, uma aplicação web de página única (SPA - Single-Page Application) construída com React para fornecer uma interface moderna, rápida e intuitiva para a gestão de frotas de veículos.

## ✨ Sobre o Projeto

O frontend do TorqueSync é o "cockpit" do sistema. É a interface com a qual o usuário interage para visualizar o status da frota, registrar novos aluguéis, controlar manutenções e analisar dados. Ele foi projetado para ser responsivo e fácil de usar, consumindo dados de uma API RESTful construída em Flask.

Este projeto funciona de forma independente do backend e se comunica com ele através de requisições HTTP.

## ⚙️ Funcionalidades Implementadas e Planejadas

* [X] Configuração do ambiente de desenvolvimento com Vite e React.
* [X] Conexão com a API backend para buscar e exibir a lista de veículos.
* [X] Componente de formulário para adicionar novos veículos à frota.
* [X] Atualização da interface em tempo real após a criação de um novo veículo.
* [X] Implementação do ciclo CRUD completo para Veículos (Update e Delete).
* [ ] Criação das telas e componentes para gestão de Clientes.
* [ ] Desenvolvimento do Dashboard principal com indicadores visuais.
* [ ] (Futuro) Implementação de rotas com React Router para navegação entre páginas.

## 🛠️ Tecnologias e Ferramentas

* **Framework Principal:** React.js
* **Ambiente de Desenvolvimento:** Vite
* **Linguagem:** JavaScript (ES6+)
* **Estilização:** CSS puro (com planos para evoluir para CSS Modules ou Styled-Components).
* **Gerenciador de Pacotes:** npm

## 🚀 Como Rodar o Projeto Localmente

**Pré-requisitos:**
* Node.js (versão LTS recomendada)
* npm (geralmente vem com o Node.js)

```bash
# 1. Clone o repositório
$ git clone [https://github.com/seu-usuario/torquesync-frontend.git](https://github.com/seu-usuario/torquesync-frontend.git)

# 2. Navegue até o diretório do projeto
$ cd torquesync-frontend

# 3. Instale todas as dependências do projeto
$ npm install

# 4. Inicie o servidor de desenvolvimento
$ npm run dev
```
Após executar `npm run dev`, a aplicação estará rodando localmente, geralmente em `http://localhost:5173/`.

**Importante:** Para que a aplicação funcione completamente, o [servidor backend do TorqueSync](https://github.com/MuriloRibeiro01/TorqueSync) também precisa estar rodando, pois é ele quem fornece os dados.

---
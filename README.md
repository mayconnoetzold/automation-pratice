# Project Cypress IV

Projeto desenvolvido durante o Chapter IV do bootcamp - Cypress Agilizei.

## 🚀 Conhecendo o desafio proposto

**Desafio**
A empresa Thunders, precisa garantir a integridade e a disponibilidade de seus serviços para clientes através de uma página de cadastro em seu site -[automation practice](http://automationpractice.com/index.php).

Essa funcionalidade é a de cadastro de clientes em seu e-commerce, que possui diversos produtos disponíveis, categorias e promoções. Diariamente, novos clientes chegam ao site e precisam efetuar um cadastro para que possam comprar seus produtos, por isso essa funcionalidade é crítica para o negócio.

Para garantir a integridade deste serviço, você deve construir um teste automatizado que simule a jornada de usuário ao realizar um cadastro. Crie um novo projeto, faça as devidas configurações e desenvolva os scripts necessários para completar essa tarefa.


**Importante**
- os dados devem ser diferentes entre um teste e outro
- adicionar asserções ao seu teste
- utilizar o mochawesome como relatório de execução
- subir o projeto no Github e enviar o link para correção
- seu projeto deve ter um README, com descrição e como executar
- o repositório do desafio deve ser público, para fins de avaliação
- não esqueça do arquivo .gitignore
- não esqueça da execução no Github Actions
- o relatório deve ser de fácil acesso, usando o Github Pages

### 📋 Pré-requisitos
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/)

### 🔧 Instalação
Após a instalação dos pré-requisitos, para utilizar este projeto, primeiramente deve-se seguir os seguintes passos:

Clonar projeto Git
```
git clone https://github.com/mayconnoetzold/projectCypress-IV.git
```
## ⚙️ Executando os testes
- Caso desejar executar os testes diretamente deve-se utilizar o seguinte script:
```
npm run cy:run
```
- Para abrir o test runner:
```
npm run cy:open
```
## 🛠️ Construído com

* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework

## 📃 Relatório de execução dos testes
Utiliza-se os scripts para geração do relatório de execução dos testes:
```
npm run report:mocha
npm run report:merge
```
* [Acesse aqui o relatório gerado](https://mayconnoetzold.github.io/projectCypress-IV/)
* [Acesse aqui o GitHubActions deste projeto](https://github.com/mayconnoetzold/projectCypress-IV/actions/workflows/Test.yml)


## ✒️ Autores
* **QA Tester** - *Desenvolvimento do teste automatizado* - [Maycon Noetzold](https://github.com/mayconnoetzold)
* **Samuel Lucas - Agilizei Bootcamp** - *Requisitos do projeto* - [Samuel Lucas](https://github.com/samlucax)
---

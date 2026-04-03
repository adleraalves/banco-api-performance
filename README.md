# 📊 Banco API Performance - Testes com K6

## 📖 Introdução

Este repositório contém testes de performance desenvolvidos para validar a eficiência, estabilidade e escalabilidade de uma API bancária. Os testes foram implementados utilizando **JavaScript** em conjunto com o **K6**, uma ferramenta moderna e robusta para testes de carga.

O objetivo principal é simular cenários reais de uso da API, identificando gargalos, avaliando tempos de resposta e garantindo que o sistema suporte diferentes níveis de tráfego.

---

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **K6** – ferramenta de testes de carga e performance
* Node.js (opcional, para organização e suporte ao projeto)

---

## 📁 Estrutura do Repositório

A estrutura do projeto foi organizada para facilitar a manutenção e escalabilidade dos testes:

```
📦 banco-api-performance
 ┣ 📂 fixtures 
 ┃ 📂 helpers
 ┣ 📂 tests
 ┣ 📂 config 
 ┣ 📂 utils
 ┗ 📜 README.md
```

---

## 🧩 Objetivo de Cada Grupo de Arquivos

* **helpers**
  Funções utilitárias reutilizáveis para interação com a API.

* **fixtures**
  Arquivos de massa de dados utilizados nos testes.

* **tests/**
  Casos de teste organizados por módulo da API.

* **config/**
  Arquivos de configuração de variáveis de ambiente.
  
* **utils**
  Funções auxiliares reutilizáveis, como geração de dados, headers, autenticação, etc.

* **README.md**
  Este documento.


---

## ⚙️ Modo de Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/adleraalves/banco-api-performance.git
cd banco-api-performance
```

### 2. Instale o K6

#### Linux (Debian/Ubuntu)

```bash
sudo apt install k6
```

#### MacOS

```bash
brew install k6
```

#### Windows

```bash
choco install k6
```

> Ou acesse a documentação oficial do K6 para outras opções de instalação.

---

## ▶️ Modo de Execução

### 🔧 Definindo variável de ambiente obrigatória

Antes de executar os testes, é necessário definir a variável:

```bash
BASE_URL=https://sua-api.com
```

---

### ▶️ Execução básica

```bash
BASE_URL=https://sua-api.com k6 run tests/seu_teste.js
```

---

### 📊 Execução com dashboard em tempo real

Para acompanhar os resultados em tempo real no navegador:

```bash
BASE_URL=https://sua-api.com \
K6_WEB_DASHBOARD=true \
k6 run tests/seu_teste.js
```

---

### 📁 Exportando relatório HTML

Para gerar um relatório exportável:

```bash
BASE_URL=https://sua-api.com \
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html_report.html \
k6 run tests/seu_teste.js
```

---

## 📈 Considerações Finais

Os testes aqui presentes podem ser facilmente adaptados para diferentes ambientes (dev, homologação, produção), bastando alterar a variável `BASE_URL`.

Recomenda-se executar os testes de forma controlada para evitar impactos indesejados nos ambientes.

---

## 🔗 Repositório

Acesse o projeto em:
https://github.com/adleraalves/banco-api-performance

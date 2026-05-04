# 📋 Cadastro Online com Integração n8n

Sistema de cadastro web que coleta dados de leads (nome, email e número) e os envia automaticamente para o n8n, que processa e distribui as informações via planilha, WhatsApp e email.

---

## 🚀 Como funciona

```
cadastro.html → API (Node.js) → n8n → Planilha + WhatsApp + Email
```

1. O usuário preenche o formulário no `cadastro.html`
2. Os dados são enviados para a API em Node.js
3. A API repassa os dados para o webhook do n8n
4. O n8n salva na planilha e envia mensagens automáticas

---

## 📁 Estrutura do projeto

```
├── cadastro.html            # Página de cadastro
├── outrapagina.html     # Página de confirmação
├── api.js            # API Node.js
└── README.md
```

---

## 🛠️ Tecnologias

- **HTML/CSS** — interface do formulário
- **Node.js** — API intermediária (sem frameworks)
- **n8n** — automação de fluxos (planilha, WhatsApp, email)

---

## ⚙️ Como rodar

**Pré-requisitos:**
- Node.js instalado
- n8n rodando em `localhost:5678`

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Inicie a API:**
```bash
node api.js
```

**3. Abra o `cadastro.html` no navegador**

---

## 🔧 Configuração

No `api.js`, troque o ID do webhook pelo seu:

```javascript
path: "/webhook/seu-id-aqui"
```

No `site.html`, confirme que a porta bate com o servidor:

```javascript
fetch("http://localhost:1234/cadastro", ...)
```

---

## 📬 Fluxo do n8n

O workflow do n8n deve conter:
- **Webhook** — recebe os dados da API
- **Google Sheets** — salva o cadastro na planilha
- **WhatsApp** — envia mensagem de boas-vindas
- **Email** — envia confirmação ao lead

---

## 📄 Licença

MIT — fique à vontade pra usar e modificar.

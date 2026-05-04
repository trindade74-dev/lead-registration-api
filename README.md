# 📋 Online Registration with n8n Integration

A web registration system that collects lead data (name, email and phone number) and automatically sends it to n8n, which processes and distributes the information via spreadsheet, WhatsApp and email.

---

## 🚀 How it works

```
site.html → API (Node.js) → n8n → Spreadsheet + WhatsApp + Email
```

1. The user fills out the form on `site.html`
2. The data is sent to the Node.js API
3. The API forwards the data to the n8n webhook
4. n8n saves it to a spreadsheet and sends automated messages

---

## 📁 Project structure

```
├── cadastro.html               # Registration page
├── cadastro_realizado.html     # Confirmation page
├── api.js                      # Node.js API
├── env.example                 # env data
├── package.json                # package data
├── workflow.json               # n8n workflow
└── README.md
```

---

## 🛠️ Technologies

- **HTML/CSS** — form interface
- **Node.js** — middleware API (no frameworks)
- **n8n** — workflow automation (spreadsheet, WhatsApp, email)

---

## ⚙️ How to run

**Prerequisites:**
- Node.js installed
- n8n running on `localhost:5678`

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

**2. Start the API:**
```bash
node api.js
```

**3. Open `cadastro.html` in your browser**

---

## 🔧 Configuration

In `api.js`, replace the webhook ID with yours:

```javascript
path: "/webhook/your-id-here"
```

In `cadastro.html`, make sure the port matches the server:

```javascript
fetch("http://localhost:1234/cadastro", ...)
```

---

## 📬 n8n Workflow

The n8n workflow should contain:
- **Webhook** — receives data from the API
- **Google Sheets** — saves the registration to a spreadsheet
- **Email** — sends a confirmation to the lead

---

## 📄 License

MIT — feel free to use and modify.

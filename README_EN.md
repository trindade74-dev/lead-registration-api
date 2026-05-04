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
├── site.html            # Registration page
├── outrapagina.html     # Confirmation page
├── server.js            # Node.js API
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
node server.js
```

**3. Open `site.html` in your browser**

---

## 🔧 Configuration

In `server.js`, replace the webhook ID with yours:

```javascript
path: "/webhook/your-id-here"
```

In `site.html`, make sure the port matches the server:

```javascript
fetch("http://localhost:1234/cadastro", ...)
```

---

## 📬 n8n Workflow

The n8n workflow should contain:
- **Webhook** — receives data from the API
- **Google Sheets** — saves the registration to a spreadsheet
- **WhatsApp** — sends a welcome message
- **Email** — sends a confirmation to the lead

---

## 📄 License

MIT — feel free to use and modify.

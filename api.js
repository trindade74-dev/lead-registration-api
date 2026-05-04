//Criacao do server
const http = require('http');
const path = require('path');
const server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
 // o que o servidor deve fazer
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    if (req.method === "POST" && req.url === "/cadastro") {
        let body = "";
        req.on("data", function(chunk) {
            body += chunk.toString();
        });
     //dados recebidos
        req.on ("end", function() {
            const dados = JSON.parse(body);
            console.log("Dados recebidos:", dados);
    // n8n
    const payload = JSON.stringify(dados);
    const options = {
        hostname: 'localhost',
        port: 5678,
        path: "/webhook/13252882-fbd9-4741-b5a8-2eae728c7c7f",
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "content-length": Buffer.byteLength(payload)
        }
    };
    const req = http.request(options, (res) => {
        console.log("n8n respondeu:", res.statusCode);
    });
    req.write(payload);
    req.end();
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify({ message: "Dados recebidos!" }));
        });
    }
});

server.listen(1234, () => {
    console.log("Server rodando na porta 1234");
});
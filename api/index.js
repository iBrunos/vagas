import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const port = 3000;
const app = express();

// Importando as rotas
import userRoute from "./src/routes/user.routes.js";
import usersRoute from "./src/routes/users.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", function (req, res) {
  // Rota inicial para uma solicitação GET na raiz do servidor
  // Retorna o arquivo index.html
  res.sendFile(path.join(__dirname, "../api/public/index.html"));
});

app.use(express.static(path.join(__dirname, "..api/public"))); // Essa linha habilita o Express para servir arquivos estáticos do diretório "api/public".
app.use(express.json()); // Middleware para analisar o corpo das solicitações JSON

// Rotas
app.use("/user", userRoute);
app.use("/users", usersRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`)); // Criando o server express na porta especificada
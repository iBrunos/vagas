import teste1 from "../controllers/teste1.js";

export default function(req, res) {
  var name = req.params.name;

  // Obtendo a contagem de acessos do usuário específico
  var count = teste1.userAccessCount[name] || 0;

  res.send("Usuário " + name + " foi lido " + count + " vezes.");
}

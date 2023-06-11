import fakeData from "../db/fakeData.js";

const createUser = (req, res) => {
  // Obter os dados do corpo da requisição
  var name = req.body.name;
  var job = req.body.job;

  // Verificação se o nome e o trabalho foram fornecidos
  if (!name || !job) {
    // Se algum dos campos estiver faltando, enviar uma resposta de erro
    res.status(400).send("Nome e trabalho são campos obrigatórios.");
    return;
  }

  // Criar um novo usuário com base nos dados recebidos e atribuir um ID
  var newUser = {
    id: fakeData.length + 1,
    name: name,
    job: job,
  };

  // Adicionar o novo usuário ao array de dados
  fakeData.push(newUser);

  // Enviar a resposta com o novo usuário adicionado e a mensagem de sucesso
  res.status(201).send({
    message: "Usuário criado com sucesso.",
    user: newUser,
  });
}
export default createUser;
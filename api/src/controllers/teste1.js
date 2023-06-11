import fakeData from "../db/fakeData.js";

// Movendo o objeto para o escopo do módulo principal
const userAccessCount = {};

const getUser = (req, res, next) => {
  const name = req.params.name;

  // Utilizando o método find() para buscar o usuário pelo nome
  const user = fakeData.find((item) => item.name === name);

  if (user) {
    // Incrementando o contador de acessos para o usuário encontrado
    userAccessCount[name] = (userAccessCount[name] || 0) + 1;

    res.send(user);
  } else {
    // Caso o usuário não seja encontrado, retornar um status de erro adequado
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res, next) => {
  res.send(fakeData);
};

export default {
  getUser,
  getUsers,
  userAccessCount // Exportando o objeto de contagem de acessos
};
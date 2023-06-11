import fakeData from "../db/fakeData.js";

 const removeUser = (req, res) => {
  var name = req.params.name;

  // Procurar o usuário pelo nome
  var index = fakeData.findIndex((item) => item.name === name);

  if (index !== -1) {
    // Remover o usuário da lista
    fakeData.splice(index, 1); // Remove o elemento na posição index do array fakeData, removendo apenas um elemento.
    res.send("Usuário removido com sucesso."); // Enviando resposta de sucesso para o usuário.
  } else {
    res.status(404).send("Usuário não encontrado."); // Enviando resposta de erro para o usuário.
  }
}

export default removeUser;
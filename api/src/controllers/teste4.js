import fakeData from "../db/fakeData.js";
const updateUser = (req, res) => {
  var name = req.params.name;

  // Procurar o usuário pelo ID
  var user = fakeData.find((item) => item.name == name);

  if (user) {
    // Atualizar os dados do usuário
    user.name = req.body.name;
    user.job = req.body.job;

    res.send({
      message: "Usuário atualizado com sucesso",
      user
    });
  } else {
    res.status(404).send("Usuário não encontrado");
  }
}
export default updateUser;
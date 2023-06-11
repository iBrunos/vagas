// Middleware de autenticação e permissões
const checkPermissions = (req, res, next) => {

  const { permission } = req.params; // Obtém a permissão do usuário da requisição
  if (!req.params || !req.params.permission) {
    res.status(401).send("Acesso não autorizado");
    return;
  }
  // Verifica se o usuário tem a permissão necessária para acessar a rota
  if (permission === "admin") {
    next(); // Permite o acesso à rota se o usuário tiver permissão de admin
  } else {
    res.status(403).send("Acesso não autorizado"); // Retorna erro 403 se o usuário não tiver permissão suficiente
  }
};

export default checkPermissions;
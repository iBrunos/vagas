import express from "express"
import teste1 from "../controllers/teste1.js";

const router = express.Router();

// Definindo as rotas e os respectivos controladores e funções
router.get("/:name", teste1.getUser);

export default router;
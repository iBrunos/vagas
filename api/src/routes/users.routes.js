import express from "express";
import teste1 from "../controllers/teste1.js";
import teste2 from "../controllers/teste2.js";
import teste3 from "../controllers/teste3.js";
import teste4 from "../controllers/teste4.js";
import teste5 from "../controllers/teste5.js";
import checkPermissions from "../middlewares/auth.middleware.js";

const router = express.Router();

// Definindo as rotas e os respectivos controladores e funções
router.get("/", teste1.getUsers);
router.post("/", teste2);
router.delete("/:name/:permission", checkPermissions, teste3);
router.put("/:name/:permission", checkPermissions, teste4);
router.get("/access/:name", teste5);


export default router;
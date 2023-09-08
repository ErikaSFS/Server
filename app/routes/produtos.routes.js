module.exports = app => {

    const produtos = require("../controllers/produtos.controller.js");
var router = require("express").Router();

router.post("/", produtos.create);


router.get("/", produtos.findAll);


router.get("/:codigo", produtos.findOne);


router.put("/:codigo", produtos.update);


router.delete("/:codigo", produtos.delete);


router.delete("/", produtos.deleteAll);

app.use("/api/produtos", router);
};
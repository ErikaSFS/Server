const db = require("../models");
const Produtos = db.produtos;

exports.create = (req, res)  => {
    if(!req.body.nome) {
        res.status(400).send({ message: "Não pode esta vazia" });
        return;
      }


      const produtos = new Produtos({
        codigo: req.body.codigo,
        nome: req.body.nome,
        preco: req.body.preco,
      });
    
    
      produtos
        .save(produtos)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Existe algum erro em criar o Produto!"
          });
        });
    };


exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { $regex: new RegExp(nome), $options: "i" } } : {};
  
    Produtos.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Há algo de errado em Produtos."
        });
      });
  };
  

exports.findOne = (req, res) => {
    const codigo = req.params.codigo;

    Produtos.findByCodigo(codigo)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Não existe esse produto pelo código " + codigo });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Erro em achar esse produto com esse código" + codigo });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Os dados não podem ser vazios!"
        });
      }
    
      const codigo = req.params.codigo;
};


exports.delete = (req, res) => {
  
    const codigo = req.params.codigo;

    Produtos.findByCodigoAndRemove(codigo, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Não pode deletar produto com codigo=${codigo}.`
          });
        } else {
          res.send({
            message: "Produto deletado com sucesso!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não podemos deletar o produto com o codigo" + codigo
        });
      });
  };
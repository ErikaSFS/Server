module.exports = mongoose => {
    const Produtos = mongoose.model(
      "produtos",
      mongoose.Schema(
        {
          codigo: String,
          nome: String,
          preco: Boolean
        },
        { timestamps: true }
      )
    );
  
        return Produtos;
  };
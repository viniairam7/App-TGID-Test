import React from "react";

const ProdutoList = ({ produtos, adicionarAoCarrinho }) => {
  return (
    <div>
      <h2>Produtos</h2>
      <div className="container">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdutoList;

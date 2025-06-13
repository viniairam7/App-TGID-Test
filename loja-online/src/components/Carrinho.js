import React from "react";

const Carrinho = ({ carrinho, removerDoCarrinho }) => {
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      {carrinho.length === 0 && <p>Seu carrinho está vazio.</p>}
      {carrinho.map((produto, index) => (
        <div key={index} className="item-carrinho">
          <span>{produto.nome} - R$ {produto.preco.toFixed(2)}</span>
          <button onClick={() => removerDoCarrinho(produto.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
};

export default Carrinho;

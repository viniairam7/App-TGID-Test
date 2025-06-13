import React from "react";

const ResumoCarrinho = ({ carrinho }) => {
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="resumo" style={{ marginTop: "20px" }}>
      <h2>Resumo da Compra</h2>
      <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
      <button disabled={carrinho.length === 0}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default ResumoCarrinho;

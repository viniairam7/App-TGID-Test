import React, { useState, useEffect } from "react";
import ProdutoList from "./components/ProdutoList";
import Carrinho from "./components/Carrinho";
import ResumoCarrinho from "./components/ResumoCarrinho";
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1>Loja Online</h1>
      <ProdutoList produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
      <div className="container">
        <Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
        <ResumoCarrinho carrinho={carrinho} />
      </div>
    </div>
  );
}

export default App;

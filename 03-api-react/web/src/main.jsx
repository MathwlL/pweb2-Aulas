import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import "./style.css";

// O React assume o controle da página no navegador e cuida da navegação
// entre a listagem e o detalhe SEM recarregar a página (SPA).
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/produtos/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

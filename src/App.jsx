import React from "react";
import Aside from "./Components/Aside";
import Category from "./pages/category/Category";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import SubCategory from "./pages/subCategory/SubCategory";
import Product from "./pages/product/Product";
import NewsComp from "./pages/news/News";
import EditProductImg from "./pages/editProductImg/editProductImg";
import { Main, Onas } from "./pages/User";
import NewsAndUseful from "./pages/newsAndUseFul/newsAndUseFul.jsx";
import Contact from "./pages/contact/Contact";
import Basket from "./pages/basket/Basket";
import Catalog from "./pages/catalog/Catalog";
import CatalogDetail from "./pages/CatalogDetail/CatalogDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/new" element={<NewsAndUseful />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/news" element={<NewsComp />} />
        <Route path="/edit-image/:id" element={<EditProductImg />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import HomePage from "./components/home/HomePage"
import Layout from './components/layout';
import { Route ,Routes } from 'react-router-dom';
import AllProducts from './components/product/AllProducts';
import ScrollToTop from './components/shared/ScrollToTop';
import ProductPage from './components/product/ProductPage';
import CategoryPage from './components/category/CategoryPage';
import AllCategoriesPage from './components/category/AllCategoriesPage';
import ShopPage from './components/shop/ShopPage';
import SignUp from './components/SignUp';
import BestSellerPage from"./components/product/BestSellerPage"
import SpecialDiscountPage from './components/product/SpecialDiscountPage';

function App() {
  
  return (
    <>
   <Layout>
   
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/bestSellerPage" element={<BestSellerPage />} />
        <Route path="/specialDiscountPage" element={<SpecialDiscountPage />} />
        <Route path="/cart" element={<ShopPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
      
      </Routes>
   

   </Layout>
   
    </>
  );
}

export default App;

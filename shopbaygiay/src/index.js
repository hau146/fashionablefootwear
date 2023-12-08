import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Login} from "./component/Login";
import {SignUp} from "./component/SignUp";
import {MainPage} from "./component/MainPage";
import {Contact} from "./component/Contact";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {AboutUs} from "./component/AboutUs";
import {Product} from "./component/Product";
import {Cart} from "./component/Cart";
import {Voucher} from "./component/Voucher";
import {DetailProduct} from "./component/DetailProduct";
import {SearchProduct} from "./component/SearchProduct";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signUp" element={<SignUp/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/about" element={<AboutUs/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/cart/:id" element={<Cart/>}></Route>
              <Route path="/voucher" element={<Voucher/>}></Route>
              <Route path="/detailProduct/:id" element={<DetailProduct/>}></Route>
              <Route path="/searchProduct/:searchName" element={<SearchProduct/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

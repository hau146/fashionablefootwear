import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-toastify/dist/ReactToastify.css"
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
import {HistoryPayCart} from "./component/HistoryPayCart";
import {ProductList} from "./component/admin/ProductList";
import {EnumAppUserRole} from "./component/config/EnumAppUserRoles";
import Authentication from "./component/config/Authentication";
import AuthorOfCustomer from "./component/config/AuthorOfCustomer";
import Error from "./component/config/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signUp" element={<SignUp/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/about" element={<AboutUs/>}></Route>
              <Route path="/searchProduct/:searchName" element={<SearchProduct/>}></Route>
              <Route path="/detailProduct/:id" element={<DetailProduct/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/403" element={<Error/>}></Route>

              <Route element={
                  <Authentication
                      allowedRoles={[
                          EnumAppUserRole.ADMIN,
                          EnumAppUserRole.MEMBER,
                      ]}
                  />
              }>

                  <Route path="/listProduct" element={<ProductList/>}></Route>

                  <Route element={<AuthorOfCustomer />}>
                      <Route path="/cart/:id" element={<Cart/>}></Route>
                      <Route path="/voucher/:id" element={<Voucher/>}></Route>
                      <Route path="/history/:id" element={<HistoryPayCart/>}></Route>
                  </Route>

              </Route>
      </Routes>
          <Footer/>
          <ToastContainer></ToastContainer>
      </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import UserProducts from "../pages/UserProducts";
import ProductForm from "../pages/ProductForm";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/userProducts" element={<UserProducts />} />
        <Route path="product-form" element={<ProductForm />} />
      </Route>
    </Routes>
  );
}

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart"
import ShopCategory from './pages/ShopCategory.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { useState } from 'react';
import Product from "./pages/Product.jsx"
import Footer from './components/Footer/Footer.jsx';
import men_banner from "./components/Assets/Frontend_Assets/banner_mens.png"
import women_banner from "./components/Assets/Frontend_Assets/banner_womens.png"
import kid_banner from "./components/Assets/Frontend_Assets/banner_kids.png"



function App() {
  const[users,setUsers]=useState([{
    username:"sakthi",
    password:"123"
}])
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}></ShopCategory>}></Route>
          <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}></ShopCategory>}></Route>
          <Route path='/kids' element={<ShopCategory category="kid" banner={kid_banner}></ShopCategory>}></Route>
          <Route path='/product' element={<Product></Product>}>
            <Route path=':productId' element={<Product></Product>}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<Login users={users} setUsers={setUsers}></Login>}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>



    </div>
  );
}

export default App;
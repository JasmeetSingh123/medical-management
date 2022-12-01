import {HomePage} from "./pages/HomePage";
import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddProducts from "./pages/AddProducts";
import ProtectRoutes from "./components/ProtectRoutes";
import { AdminHome } from "./admin/AdminHome";
import AdminCart from "./admin/pages/AdminCart";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminProtectRoutes from "./admin/components/AdminProtectedRoutes";
import LandingPage from "./pages/LandingPage";
import AdminRegister from "./admin/pages/AdminRegister";



function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          

          <Route exact path="/home" element={<ProtectRoutes><HomePage/></ProtectRoutes>} />
         
          <Route exact path="/bookmark" element={<CartPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/addProducts" element={<AddProducts/>} />

          <Route exact path="/adminLogin" element={<AdminProtectRoutes><AdminLogin/></AdminProtectRoutes>} />
          <Route exact path="/admin" element={<AdminHome/>} />
          <Route exact path="/admin-cart" element={<AdminCart/>} />
          <Route exact path="/admin-login" element={<AdminLogin/>} />
          <Route exact path="/admin-register" element={<AdminRegister/>} />


          <Route exact path="/" element={<LandingPage/>} />


        </Routes>
      </Router>
           
    </div>
  );
}

export default App;

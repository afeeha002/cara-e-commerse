import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Firstpage from './components/homepage/Firstpage';
import Navbar from './components/homepage/Navbar';
import About from './components/aboutpage/About';
import Product from './components/productpage/Product';
import SinglePage from './components/singlePage';
import { CartProvider } from './components/cartpage/CartContext';
import Maincart from './components/cartpage/Maincart';
import Address from './components/cartpage/Address';
// import ItemCart from './components/cartpage/itemCart';
import { Invoice } from './components/cartpage/Invoice';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Firstpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/services" element={<Maincart />} />
          <Route path="services/address" element={<Address />} />
          {/* <Route path="services/itemCart" element={<ItemCart />} /> */}
          <Route path="services/address/invoice" element={<Invoice />} />
          <Route path="services/address/invoice/bill" element={<Invoice />} />


        </Routes>
      </Router>
    </CartProvider>
  );
}



export default App;

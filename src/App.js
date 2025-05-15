import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Menu from "./pages/Menu";
import Activities from './pages/Activities';
import About from "./pages/About";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Checkout from './pages/Checkout';
import Checkoutact from './pages/Checkoutact';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity, quantities) => {
    const newItem = { activity, quantities };
    setCart((prevCart) => [...prevCart, newItem]);
    console.log("Panier mis à jour :", [...cart, newItem]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/activities" element={<Activities addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutact" element={<Checkoutact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

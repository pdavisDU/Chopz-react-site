// importing the neccesary components
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* creating routes below for our pages */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/schedule" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import ProductDetail from './components/ProductDetail';
import Carrito from './pages/Carrito';
import './styles/header.css';
import './styles/footer.css';
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Carrito />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

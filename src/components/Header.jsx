import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Solo importa useCart

function Header() {
  const { cartItems } = useCart(); // Usa el hook personalizado

  return (
    <header>
      <div className="logo">
        <img src="../../public/vite.svg" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>

          <li>
          <Link to="/Detalles">DetallesProducto</Link>
          </li>
          <li>
            
              <Link to="/cart">Carrito</Link>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            
          </li>  
        </ul>
      </nav>
    </header>
  );
}

export default Header;

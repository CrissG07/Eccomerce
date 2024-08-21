import { Link } from 'react-router-dom';


function Header() {
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
            <Link to="/cart">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

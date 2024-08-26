import '../styles/cart.css';
export const Cart = () => {
  return (
    <div className="carrito">
      <h2>Tu Carrito de Compras</h2>
      <div className="carrito-items">
        {/* Reemplaza este bloque con un mapeo de productos */}
        <div className="carrito-item">
          <img src="../../public/vite.svg" alt="Producto" />
          <div className="carrito-item-details">
            <h3>Nombre del Producto</h3>
            <p>Precio: $100</p>
            <div className="cantidad">
              <button>-</button>
              <input type="number" value="1" />
              <button>+</button>
            </div>
            <button className="eliminar">Eliminar</button>
          </div>
        </div>
        {/* Fin del bloque de ejemplo */}
      </div>
      <div className="carrito-total">
        <h3>Total: $100</h3>
        <button className="comprar"><span>Proceder a la Compra</span></button>
      </div>
    </div>
  );
}
export default Cart;

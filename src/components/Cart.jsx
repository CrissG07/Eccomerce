import '../styles/cart.css';
import { useCart } from '../context/CartContext'; // Importa el contexto del carrito

export const Cart = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity, getCartTotal } = useCart(); // Obtén las funciones necesarias del contexto

    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            <div className="carrito-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="carrito-item">
                        <img src={item.image} alt={item.name} />
                        <div className="carrito-item-details">
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price}</p>
                            <div className="cantidad">
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <input type="number" value={item.quantity} onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))} />
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button className="eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carrito-total">
                <h3>Total: ${getCartTotal()}</h3>
                <button className="comprar"><span>Proceder a la Compra</span></button>
            </div>
        </div>
    );
};

//Modal//

export default Cart;
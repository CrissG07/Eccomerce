import { useState } from 'react';
import { useCart } from '../context/CartContext';// Importa el contexto del carrito
import '../styles/cart.css';
import ConfirmationModal from '../components/ConfirmationModal';

export const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);
    const { cartItems, removeFromCart, updateCartItemQuantity, getCartTotal } = useCart();

    const handleProceedToCheckout = () => {
        setIsModalOpen(true); // Abre el modal cuando se hace clic en "Proceder a la Compra"
    };

    const handleConfirmPurchase = () => {
        setIsModalOpen(false);
        setIsPurchaseConfirmed(true); // Marca la compra como confirmada
        alert("Compra realizada");
        window.location.href = '/Eccomerce/products'; // Redirige a la lista de productos
    };
    
    

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cierra el modal sin confirmar la compra
    };

    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            <div className="carrito-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="carrito-item">
                        <img src={item.image} alt={item.name} />
                        <div className="carrito-item-details">
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price.toLocaleString('de-DE')}</p>
                            <div className="cantidad">
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))} 
                                />
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button className="eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carrito-total">
                <h3>Total: ${getCartTotal().toLocaleString('de-DE')}</h3>
                <button className="comprar" onClick={handleProceedToCheckout}>
                    <span>Proceder a la Compra</span>
                </button>
            </div>

            <ConfirmationModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onConfirm={handleConfirmPurchase} 
            />

            {isPurchaseConfirmed && <p>Compra realizada</p>} {/* Mensaje opcional */}
        </div>
    );
};
export default Cart;
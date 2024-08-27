/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import '../styles/ProductCart.css';
import 'boxicons/css/boxicons.min.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [showDetails, setShowDetails] = useState(false);

    const handleInfoClick = (event) => {
        event.stopPropagation(); // Previene la propagación del evento de clic
        setShowDetails(!showDetails);
    };

    return (
        <div className={`product-card ${product.isPopular ? 'popular-product' : ''}`}>
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-info">
                <h3 className="text-title">{product.name}</h3>
            </div>
            <div className="card-footer">
                <span className="text-title">${product.price.toLocaleString('de-DE')}</span>
                <div onClick={handleInfoClick} style={{ cursor: 'pointer' }} aria-label="Ver detalles" title="Ver detalles">
                    <i className='bx bx-info-circle'></i>
                </div>
                <div className="card-button" onClick={() => addToCart(product)} aria-label="Agregar al carrito" title="Agregar al carrito">
                    <i className='bx bx-cart'></i>
                </div>
            </div>
            {showDetails && <ProductDetail product={product} />}
        </div>
    );
};

export default ProductCard;

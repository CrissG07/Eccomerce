/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';
import { useState } from 'react'; // Importar useState
import ProductDetail from './ProductDetail'; // Importar ProductDetail
import '../styles/ProductCart.css';
import 'boxicons/css/boxicons.min.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [showDetails, setShowDetails] = useState(false);

    const handleInfoClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`product-card ${product.isPopular ? 'popular-product' : ''}`}>
            <img src={product.image} alt="" className="card-img" />
            <div className="card-info">
                <h3 className="text-title">{product.name}</h3>
            </div>
            <div className="card-footer">
                <span className="text-title">${product.price.toLocaleString('de-DE')}</span>
                <div onClick={handleInfoClick} style={{ cursor: 'pointer' }}>
                    <i className='bx bx-info-circle'></i>
                </div>
                <div className="card-button" onClick={() => addToCart(product)}>
                    <i className='bx bx-cart' ></i>
                </div>
            </div>
            {showDetails && <ProductDetail product={product} />} 
        </div>
    );
};

export default ProductCard;

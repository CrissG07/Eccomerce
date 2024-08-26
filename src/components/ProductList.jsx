
import { useCart } from '../context/CartContext'; // Importa el contexto del carrito
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import '../styles/ProductDetail.css';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart(); // Obtén la función para agregar al carrito

    const handleAddToCart = (product) => {
        addToCart(product); // Agrega el producto al carrito
        setSelectedProduct(product); // Muestra el detalle del producto seleccionado
    };


    return (
        <div>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id}>

                        <ProductCard 
                            product={product} 
                            onClick={() => handleAddToCart(product)} // Asegura que el clic se registre
                        />
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div>
                    <ProductDetail product={selectedProduct} />
                </div>
            )}
        </div>
    );
};

export default ProductList;

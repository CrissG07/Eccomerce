/* eslint-disable react/prop-types */

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
            <div className='section'>
                <ul className='categoria'>
                    <a className='link' href="#"><li className='list'>Moda</li></a>
                    <a className='link' href="#"><li className='list'>Electrónicos</li> </a>                   
                    <a className='link' href="#"><li className='list'>Hogar</li></a>
                    <a className='link' href="#"><li className='list'>Deportes</li></a>
                    <a className='link' href="#"><li className='list'>Juguetes</li></a>
                    <a className='link' href="#"><li className='list'>Belleza</li></a>
                    <a className='link' href="#"><li className='list'>Herramientas</li></a>
                    <a className='link' href="#"><li className='list'>Mascotas</li></a>
                    <a className='link' href="#"><li className='list'>Comida</li></a>
                    <a className='link' href="#"><li className='list'>Más</li></a>
                </ul>
            </div>
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

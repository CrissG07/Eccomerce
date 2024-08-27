/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import myProductList from '../productos';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import '../styles/productDetail.css';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        setSelectedProduct(product);
    };

    const getRelatedProducts = (product) => {
        const related = myProductList.filter(p => p.categoria === product.categoria && p.id !== product.id);
        return related;
    };

    const handleCategoryClick = (category, event) => {
        event.preventDefault(); // Evita que la página se recargue
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
    ? products.filter(product => product.categoria && product.categoria.toLowerCase() === selectedCategory.toLowerCase())
    : products;


    return (
        <div>
            <div className='section'>
                <ul className='categoria'>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('moda', e)}>Moda</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('electronicos', e)}>Electrónicos</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('hogar', e)}>Hogar</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('deportes', e)}>Deportes</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('juguetes', e)}>Juguetes</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('belleza', e)}>Belleza</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('herramientas', e)}>Herramientas</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('mascotas', e)}>Mascotas</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('comida', e)}>Comida</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to="#" onClick={(e) => handleCategoryClick('', e)}>Todas</Link>
                    </li>
                </ul>
            </div>

            <h1>Productos</h1>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id}>
                            <ProductCard 
                                product={product} 
                                onClick={() => handleAddToCart(product)} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>

            {selectedProduct && (
                <div>
                    <ProductDetail 
                        product={selectedProduct} 
                        relatedProducts={getRelatedProducts(selectedProduct)} 
                    />
                </div>
            )}
        </div>
    );
};

export default ProductList;

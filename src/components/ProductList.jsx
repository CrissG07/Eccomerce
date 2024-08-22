/* eslint-disable react/prop-types */
import  { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import '../styles/ProductDetail.css'

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <div>
                <ProductDetail product={selectedProduct} />
            </div>
        </div>
    );
};

export default ProductList;

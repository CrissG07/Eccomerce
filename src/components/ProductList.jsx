/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';

const ProductList = ({ products = [] }) => { // Default to empty array
    const { addToCart } = useCart();

    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;

/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';

const ProductList = ({ products }) => {
    const { addToCart } = useCart();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
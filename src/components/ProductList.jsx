/* eslint-disable react/prop-types */
import ProductCard from '../components/ProductCard';
import '../styles/ProductDetail.css'

const ProductList = ({ products }) => {

    return (
        <div>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductList;

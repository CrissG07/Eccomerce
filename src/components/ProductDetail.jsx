/* eslint-disable react/prop-types */
import '../styles/productDetail.css'

const ProductDetail = ({ product }) => {

    return (
        <div className="product-detail">
            <h2 className="title">{product.name}</h2>
            <p className="info">Descripción: {product.description}</p>
        </div>
    );
};

export default ProductDetail;

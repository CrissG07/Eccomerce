/* eslint-disable react/prop-types */
import '../styles/productDetail.css'

const ProductDetail = ({ product }) => {
    if (!product) return <p>Seleccione un producto para ver los detalles</p>;

    return (
        <div className="product-detail">
            <h2 className="title">{product.name}</h2>
            <p className="info">Description: {product.description}</p>
            <p className="precio">Price: ${product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} />
        </div>
    );
};

export default ProductDetail;

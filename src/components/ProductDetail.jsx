/* eslint-disable react/prop-types */
import '../styles/productDetail.css';

const ProductDetail = ({ product, relatedProducts }) => {
    return (
        <div className="product-detail">
            <h2 className="title">{product.name}</h2>
            <p className="info">Descripción: {product.description}</p>
            
            {/* Sección de productos relacionados */}
            {relatedProducts && relatedProducts.length > 0 && (
                <div className="related-products">
                    <h3>Productos relacionados</h3>
                    <div className="related-products-list">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="related-product-card">
                                <img src={relatedProduct.image} alt={relatedProduct.name} className="related-product-img" />
                                <p className="related-product-name">{relatedProduct.name}</p>
                                <p className="related-product-price">${relatedProduct.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;

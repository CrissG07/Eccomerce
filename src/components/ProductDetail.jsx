import '../styles/ProductDetail.css'

export const ProductDetail = () => {
  return (
    <>
      <div className="product-detail">
        <div className='title'>
          <h2>Detalles del Producto</h2>
        </div>
        <div className="info">
          <p>Aquí va la descripción del producto que va a hacer Cuervo</p>
        </div>
        <div className='precio'>
          <b>Precio: $1000</b>
        </div>
      </div>
    </>
  )
}
export default ProductDetail;

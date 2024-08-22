import ProductList from "../components/ProductList";


const myProductList = [
    { id: 1, name: "Producto 1", price: 10.00 },
    { id: 2, name: "Producto 2", price: 20.00 },
    
];

export const Productos = () => {
    return (
        <ProductList products={myProductList} />
    );
};

export default Productos;
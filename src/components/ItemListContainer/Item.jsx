import { Link

 } from "react-router-dom"
const Item = ({ product }) => {
    return (
        <Link to={"/detail/"+product.id} className="card m-1 p-2" style={{ width: "18rem" }}>
            < img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: {product.price}</p>
                <p className="card-text">Stock: {product.stock}</p>
                
            </div>
        </Link>
    )
}
export default Item
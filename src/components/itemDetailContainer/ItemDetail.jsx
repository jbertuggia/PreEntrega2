
const ItemDetail = ({ product }) => {
    return (
        <div className = "container-md">
            <img width={500} src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    )
}
export default ItemDetail

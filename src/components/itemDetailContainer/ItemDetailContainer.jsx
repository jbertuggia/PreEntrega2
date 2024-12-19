import { useState, useEffect } from "react"
import { getProducts} from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})

const {idProduct} = useParams()

useEffect (() => {
    getProducts()
    .then ( (data) =>{
        const productFind = data.find( (dataProduct) => dataProduct.id === idProduct)
        setProduct (productFind)
    } )
}, [])


  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}
export default ItemDetailContainer
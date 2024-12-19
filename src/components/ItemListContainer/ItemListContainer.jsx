import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "../UI/Loading";


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
   
    const {idCategory} = useParams ()

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then((data) => {
                if (idCategory) {
                    const productFilter = data.filter ( (product)=> product.category === idCategory )
                    setProducts(productFilter)
                }else{
                    setProducts(data)
                }
                
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idCategory])

    console.log(products)


    return (
        <div>
            <h2 className="fs-4 text-start text-dark">{greeting}</h2>
            {
                loading === true ? (<Loading/>) : (<ItemList products={products} />)
            }
            
        </div>
    )
}


export default ItemListContainer;
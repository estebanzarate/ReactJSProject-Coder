import { useEffect, useState } from "react"
import { ItemList } from "../components/ItemList/ItemList"
import { pedirDatos } from "../components/PedirDatos/PedirDatos"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        pedirDatos()
            .then((res) => {
                setProducts(res)
            })

    })


    return (

        <>
            <ItemList products={products} />
        </>

    )

}
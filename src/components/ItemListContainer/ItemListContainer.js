import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../../Components/ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import { Filters } from "../Filters/Filters"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, "products")
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef
        getDocs(q)
            .then(resp => {
                setProducts(resp.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }));
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoria])


    return (

        <>
            {
                loading
                    ? <Loading />
                    :
                    <div className="productos">
                        <Filters />
                        <ItemList products={products} />
                    </div>
            }
        </>

    )

}
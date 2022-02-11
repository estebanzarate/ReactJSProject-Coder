import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../../Components/ItemList/ItemList"
import { pedirDatos } from "../../Components/PedirDatos/PedirDatos"
import { Loading } from "../Loading/Loading"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoria } = useParams();
    console.log(categoria);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria) {
                    setProducts(res.filter((el) => el.categoria === categoria))
                } else {
                    setProducts(res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoria])


    return (

        <main>
            {
                loading
                    ? <Loading />
                    : <ItemList products={products} />
            }
        </main>

    )

}
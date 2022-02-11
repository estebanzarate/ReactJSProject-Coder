import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../PedirDatos/PedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                setItem(res.find(el => el.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (

        <div>
            {
                loading
                    ? <h2>Cargando producto...</h2>
                    : <ItemDetail {...item} />
            }
        </div>

    )

}

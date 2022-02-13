import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../PedirDatos/PedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading"

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

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
                    ? <Loading />
                    : <ItemDetail {...item} />
            }
        </div>

    )

}

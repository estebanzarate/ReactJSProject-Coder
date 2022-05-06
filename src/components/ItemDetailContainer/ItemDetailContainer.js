import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading"
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then(doc => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (

        <>
            {
                loading
                    ? <Loading />
                    : <ItemDetail {...item} />
            }
        </>

    )

}

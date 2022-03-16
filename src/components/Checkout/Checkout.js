import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

export const Checkout = () => {

    const { cart, totalCart, vaciarCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        }
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden)
            .then(resp => {
                cart.forEach(item => {
                    const docRef = doc(db, "products", item.id)
                    getDoc(docRef)
                        .then(dbDoc => {
                            updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad })
                        })
                })
                setOrderId(resp.id)
                vaciarCart()
            })
            .catch(err => {
                console.log(err);
            })
    }

    const [values, setvalues] = useState({
        nombre: "",
        email: "",
        tel: "",
        texto: ""
    })

    const handleInputChange = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.nombre === "") {
            alert("No puedes dejar el nombre en blanco");
            return
        }

        if (values.email.length === "") {
            alert("No puedes dejar el nombre en blanco");
            return
        }

        generarOrden();
    }

    if (orderId) {
        return (
            <main className="checkOut">
                <div className="checkOutDiv">
                    <h2 className="gracias">Gracias por tu compra!</h2>
                    <h3 className="orden">Tu número de orden es: <span className="ordenNum">{orderId}</span></h3>
                    <Link to="/">
                        <button className="btn btnCheck">Volver</button>
                    </Link>
                </div>
            </main>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (

        <div className="main-checkout">
            <form onSubmit={handleSubmit} className="form-contacto">
                <input type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre" className="inputForm" />
                <input type="tel" placeholder="Teléfono" value={values.tel} onChange={handleInputChange} name="tel" className="inputForm" />
                <input type="email" placeholder="Email" value={values.email} onChange={handleInputChange} name="email" className="inputForm" />
                <input type="submit" value="ENVIAR" className="btn" />
            </form>
        </div>

    )

}
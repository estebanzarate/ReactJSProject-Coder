import { Link } from "react-router-dom"
import bcVideo from "../../video/yodaLuvi.mp4"

export const Nosotros = () => {

    return (

        <main className="main-nosotros">
            <video className="videoLuvi" autoPlay muted loop>
                <source src={bcVideo} type="video/mp4" />
            </video>
            <Link to="/productos">
                <button className="btn btn-main">VER PRODUCTOS</button>
            </Link>
        </main>

    )

}
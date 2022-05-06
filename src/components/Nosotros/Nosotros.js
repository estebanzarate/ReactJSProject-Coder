import { Link } from "react-router-dom";
import bcVideo from "../../video/yodaLuvi.mp4";
import { BtnMain } from "../BtnMain/BtnMain";

export const Nosotros = () => {

    return (

        <main className="mainUs">
            <video className="videoLuvi" autoPlay muted loop>
                <source src={bcVideo} type="video/mp4" />
            </video>
            <Link to="/productos">
                <BtnMain text="VER PRODUCTOS"/>
            </Link>
        </main>

    )

}
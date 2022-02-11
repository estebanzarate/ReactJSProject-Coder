import { CarTWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import logoLuvi from "../../images/logo.png"

export const NavBar = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={logoLuvi} alt="logo" />
            </Link>

            <nav>
                <Link to="/nosotros" className="header-link">nosotros</Link>
                <Link to="/productos" className="header-link">productos</Link>
                <Link to="/contacto" className="header-link">contacto</Link>
            </nav>
            <CarTWidget />
        </header>
    )
}
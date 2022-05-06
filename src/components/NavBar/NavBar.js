import { CarTWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import logoLuvi from "../../images/logo.png"
import { useState } from "react";

export const NavBar = () => {

    const [header, setHeader] = useState(false)

    const navBarColor = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener("scroll", navBarColor);

    return (
        <header className={header ? "header active" : "header"}>
            <Link to="/" className="logo">
                <img src={logoLuvi} alt="logo" />
            </Link>

            <nav className="navBar">
                <Link to="/nosotros" className="headerLink">nosotros</Link>
                <Link to="/productos" className="headerLink">productos</Link>
                <Link to="/contacto" className="headerLink">contacto</Link>
            </nav>
            <CarTWidget />
        </header>
    )

}
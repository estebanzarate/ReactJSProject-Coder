import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"

export const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://www.instagram.com/Luvikup" target="_blank" rel="noreferrer">
                <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/Luvikup" target="_blank" rel="noreferrer">
                <AiFillFacebook />
            </a>
        </footer>
    )
}
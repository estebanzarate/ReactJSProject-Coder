import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="redes">
                    <a href="https://www.instagram.com/Luvikup" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                    <a href="https://www.facebook.com/Luvikup" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                </div>
            </footer>
        </>
    )
}
import { Link } from "react-router-dom";
import crochet from "../../images/crochet.png"

export const Item = ({ id, nombre, img, precio }) => {

    return (

        <div className="card">
            <img src={img} alt={nombre} className="card-img" />
            <div className="card-body">
                <p className="card-price">${precio}</p>
                <h3 className="card-title">{nombre}</h3>
            </div>
            <Link to={`/detail/${id}`} className="btn-container">
                <img src={crochet} alt="crochet" className="card-btn" />
                <span>VER MAS</span>
                <img src={crochet} alt="crochet" className="card-btn" />
            </Link>
        </div>

    )

}
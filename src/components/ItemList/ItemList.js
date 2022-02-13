import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {

    return (

        <div className="card-grid">
            {products.map(el => <Item key={el.id} {...el} />)}
        </div>

    )

}
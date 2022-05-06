import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {

    return (

        <div className="cardGrid">
            {products.map(el => <Item key={el.id} {...el} />)}
        </div>

    )

}
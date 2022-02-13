import { useEffect, useState } from "react";

export const ItemCount = ({ min = 0, max }) => {

    const [counter, setCounter] = useState(min);

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return (

        <div>
            <button onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button onClick={handleSumar}>+</button>
        </div>

    )

}
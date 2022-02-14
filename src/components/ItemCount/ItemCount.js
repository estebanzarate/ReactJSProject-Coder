export const ItemCount = ({ min = 0, max, counter, setCounter }) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return (

        <div className="itemCount">
            <button onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button onClick={handleSumar}>+</button>
        </div>

    )

}
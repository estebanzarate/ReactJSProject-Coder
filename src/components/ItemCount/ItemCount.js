import { configBtns } from "./configBtns"

export const ItemCount = ({ min = 0, max, counter, setCounter }) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const { configMinus, configAdd } = configBtns(counter, max, min, handleRestar, handleSumar)

    return (

        <div className="itemCount">
            <button {...configMinus}>
                -
            </button>
            <span>{counter}</span>
            <button {...configAdd}>
                +
            </button>
        </div>

    )

}
export const configBtns = (min, max, counter, restar, sumar) => {
    const configMinus = {
        className: `btn-counter ${counter === min ? "btn-counterMin" : ""}`,
        disabled: counter === min,
        onClick: restar
    }

    const configAdd = {
        className: `btn-counter ${counter === max ? "btn-counterMin" : ""}`,
        disabled: counter === max,
        onClick: sumar
    }

    return { configMinus, configAdd }

}
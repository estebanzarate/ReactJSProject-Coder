export const BtnMain = ({ text, fct, css }) => {
    return <button
        className="btnMain"
        onClick={fct ? fct : null}
        style={css}
        >
        {text}
    </button>
}
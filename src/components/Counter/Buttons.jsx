export const Buttons = ({handleIncrement ,handleDecrement}) => {
    return (
        <>
            <button type="button" onClick={handleIncrement}>
                Збільшити на 1
            </button>
            <button type="button" onClick={handleDecrement}>
                Зменшити на 1
            </button>
        </>
    )
}
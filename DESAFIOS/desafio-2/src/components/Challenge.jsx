const Challenge = () => {
    const a = 15
    const b = 12
    return(
        <div>
            <div>
                <h1>Contando no console</h1>
            </div>
            <div>
                <p>O valor a é: {a}</p>
                <p>O valor b é: {b}</p>
                <button onClick={() => alert(a+b)}>Clique Aqui</button>

            </div>
        </div>
    )

}
export default Challenge
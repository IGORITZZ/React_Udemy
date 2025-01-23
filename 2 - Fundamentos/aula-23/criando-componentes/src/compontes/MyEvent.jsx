const MyEvent = () => {
    const handleMyEvent = (evento) => {
        console.log(evento)
        console.log("Ativou o Evento")
    } 
    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique Aqui</button>
            </div>
        </div>
    )
}

export default MyEvent
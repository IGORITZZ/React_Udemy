import { useState, useEffect } from "react";

    // 1 e 4 - customizando hook e resgatando dados
  export const useFetch = (url) => {
    const [dados, setDados] = useState(null)

    useEffect(() => {

        const buscarDados = async () => {
            const resposta = await fetch(url)
            const dados = await resposta.json()
            setDados(dados) 
        }
        buscarDados()

    }, [url])

    return{dados}
}
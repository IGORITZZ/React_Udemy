import { useState, useEffect } from "react";

    // 1 e 4 - customizando hook e resgatando dados
  export const useFetch = (url) => {
    const [dados, setDados] = useState(null)

    useEffect(() => {

        const fetchDatos = async () => {
            const resposta = await fetch(url)
            const json = await resposta.json()
            setDados(json) 
        }
        fetchDatos()

    }, [url])

    return{dados}
}
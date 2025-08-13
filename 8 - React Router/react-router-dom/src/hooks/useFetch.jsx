import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [metodo, setMetodo] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(null)

    const httpConfig = (data, metodo) => {
        if(metodo === "POST") {
            setConfig({
                metodo,
                Headers: {
                    "Contet-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMetodo(metodo)
        }
    }

    useEffect(() => {
        const buscarDados = async () => {
            setLoading(true)
            try{
                const resposta = await fetch(url);
                const json = await resposta.json();
                setData(json);
            }catch(error){
                console.log(error.msg)
                setErro("Houve um erro ao carregar os dadso")
            }
            setLoading(false)
        }
        buscarDados()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async() => {
        if(metodo === "POST") {
            let fetchOptions = [url, config]
            const resposta = await fetch(...fetchOptions)
            const json = await resposta.json()
            setCallFetch(json)
        
        }}
        httpRequest()
    }, [config, metodo, url])
  return {data, httpConfig, loading, erro}    
} 
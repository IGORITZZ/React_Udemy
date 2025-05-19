import { useState, useEffect } from "react";

// 1 e 4 - customizando hook e resgatando dados
export const useFetch = (url) => {
  const [dados, setDados] = useState(null);
  // 5 - refatorando o POST
  const [configuracao, setConfiguracao] = useState(null);
  const [metodo, setMetodo] = useState(null);
  const [recarregamento, setRecarregamento] = useState(false);

  const configuracaoHttp = (data, method) => {

    if(method === "POST"){
        setConfiguracao({
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setMetodo(method)
    }

  }

  useEffect(() => {
    const buscarDados = async () => {
      const resposta = await fetch(url);
      const dados = await resposta.json();\gi
      setDados(dados);
    };
    buscarDados();
  }, [url, recarregamento]);

  // 5 - refatorando o POST
  useEffect(() => {
    const requisicaoHttp = async () => {
      if (metodo === "POST") {
        let buscarOpcoes = [url, configuracao];

        const resposta = await fetch(...buscarOpcoes);

        const json = await resposta.json();

        setRecarregamento(json);
      }
    };
    requisicaoHttp();
  }, [configuracao, metodo, url]);

  return { dados, configuracaoHttp };
};

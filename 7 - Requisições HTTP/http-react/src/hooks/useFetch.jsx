import { useState, useEffect } from "react";

// 1 e 4 - customizando hook e resgatando dados
export const useFetch = (url) => {
  const [dados, setDados] = useState(null);
  // 5 - refatorando o POST
  const [configuracao, setConfiguracao] = useState(null);
  const [metodo, setMetodo] = useState(null);
  const [chamarBusca, setChamarBusca] = useState(null);

  // 6 - Loading
  const [carregando, setCarregando] = useState(false)

  const configuracaoHttp = (produto, method) => {
    if (method === "POST") {
      setConfiguracao({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(produto),
      });
      setMetodo(method);
    }
  };

  // 5 - refatorando o POST
  useEffect(() => {
    const requisicaoHttp = async () => {
      if (metodo === "POST") {
        // let buscarOpcoes = [url, configuracao];
        const resposta = await fetch(url, configuracao);
        const json = await resposta.json();
        setChamarBusca(json);
      }
    };
    requisicaoHttp();
  }, [configuracao, metodo, url]);

  useEffect(() => {
    const buscarDados = async () => {
      // 6 - Loading
      setCarregando(true)
      const resposta = await fetch(url);
      const dados = await resposta.json();
      setDados(dados);
      setCarregando(false)
    };
    buscarDados();
  }, [url, chamarBusca]);

  return { dados, configuracaoHttp, carregando };
};

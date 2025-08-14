import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // o parametro (url) vem diretamente de app.jsx, e é a nossa "API JSON"
  const [data, setData] = useState(null); // dados da base de dados
  const [config, setConfig] = useState(null); // configrações com base no metodo
  const [metodo, setMetodo] = useState(null); // metodo, influencia as configurações
  const [callFetch, setCallFetch] = useState(false); // um "gatilho" para renderizar novamente um estado
  const [loading, setLoading] = useState(false); // condição informativa, afeta apenas a vizualização em tela, não afeta o código
  const [erro, setErro] = useState(null); // se houver erro, ele é armazenado aqui para renderizar em tela ou console
  const [itemId, setItemId] = useState(null) // id do item a ser deletado

  const httpConfig = async (data, metodo) => {
    // parametros vindos de app.jsx
    if (metodo === "POST") {
      setConfig({
        metodo, // informar o metodo dessa maneira, ele automaticamente busca o valor que tem no parametro
        Headers: {
          "Contet-type": "application/json", // informar o tipo de documento/arquivo
        },
        body: JSON.stringify(data), // transforma em objeto JSON
      });
    } else if (metodo === "DELETE") {
      setConfig({ metodo }); // nesse caso em especifico não precisamos informar nada além do metodo
    }
    setMetodo(metodo); // chamamos o metodo para que sempre tenha o seu valor correto
    setData(); // chamamos o setData para limpar o stado depois do envio
  };

  useEffect(() => {
    const buscarDados = async () => {
      setLoading(true); // quando inicia o carregamento de alguma informação podemos usar essa lógica em tela e mostrar algo para o usuário
      try { // tente o códido abaixo
        const resposta = await fetch(url);
        const json = await resposta.json();
        setData(json);
      } catch (error) {
        console.log(error.msg);
        setErro("Houve um erro ao carregar os dados");
      }
      setLoading(false);
    };
    buscarDados();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (metodo === "POST") {
        let fetchOptions = [url, config];
        const resposta = await fetch(...fetchOptions);
        const json = await resposta.json();
        setCallFetch(json);
      }
      if (metodo === "DELETE") {
        let deleteUrl = `${url}/${itemId}`;
        let fetchOption = [deleteUrl, config];
        const resposta = await fetch(...fetchOption);
        const json = await resposta.json();
        setCallFetch(json);
      }
    };
    httpRequest();
    setItemId()
  }, [config, metodo, url, erro, itemId]);
  return { data, httpConfig, loading, erro };
};

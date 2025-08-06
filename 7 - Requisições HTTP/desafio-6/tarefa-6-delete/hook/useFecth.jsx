import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);
  // dados são renomeados para produtos em app.jsx
  const [carregando, setCarregando] = useState(false);
  // assegura o estado para carregando ou não dos dados
  const [erro, setErro] = useState(null);
  // armazena os erros encontrados durante algum dos processos do código
  const [trigger, setTrigger] = useState(false);
  // Força a atualização da lista, corrige erro de looping infinto ou erro de atualização por exclusão de item

  // Função para configurar e executar requisições HTTP
  const httpConfig = async (data, method) => {
    //funcao assincronada para informar estado, dados e metedos da nossa lista
    //data, method são passados pelo return que faz a ponte entre useFetch.jsx e app.jsx
    setCarregando(true);
    // altera o estado de carregando para true, afeta diretamente a nossa lisata
    setErro(null);
    // força o erro retornar para null antes do código voltar a rodar

    try {
      // o uso de try indica "tentativa", ou seja, tente isso
      const config = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method !== "GET" ? JSON.stringify(data) : undefined,
        // tudo que for difenrete de GET (mesmo tipo ou não) retorna TRUE e data é transformado em objeto json
      }; // toda essa linha simboliza a configuração generica para qualquer metodo

      let requestUrl = url;
      // salva um valor da url para realizar uma configuração
      // Se for DELETE, adiciona o ID na URL
      if (method === "DELETE" && data?.id) {
        // confere se o method passando é identido
        // usa o operador de encadeamento opicional para saber se dara é TRUE (tem mesmo informações) e acessa o .id
        requestUrl = `${url}/${data.id}`;
        // altera o valor da requestUrl com a url atual adicionaod "/" e a informação do id
      }

      const response = await fetch(requestUrl, config);
      // faz uma busca com as seguintes informações
      // requestUrl, informa a url, se for "delete" a url virá com o id, se for qualquer outro metodo ela vira padrão
      // config terá sempre uma informação diferente, porém essa função não é chamada automaticamente aqui
      if (!response.ok) {
        // estou negando, então se relmente for false (o if se torna true) e executa o código
        throw new Error(`Erro HTTP: ${response.status}`);
        // throw new Error é usado dentro de try para tratar erros esperados pelo sistema e interrompe o código aqui mesmo
        // quando o erro ainda não é esperado não é uma boa prática utilizar throw new Error
      }

      // Força a atualização dos dados após a requisição
      setTrigger((prev) => !prev);

      // Retorna o JSON apenas se houver conteúdo
      return response.status !== 204 ? await response.json() : null;
    } catch (error) {
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  };

  // Efeito para buscar os dados
  useEffect(() => {
    const fetchData = async () => {
      setCarregando(true);
      setErro(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const json = await response.json();
        setDados(json);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, [url, trigger]); // Adiciona trigger como dependência

  return { dados, httpConfig, carregando, erro };
};

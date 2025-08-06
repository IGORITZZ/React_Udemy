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
        // throw new Error é usado dentro de try para tratar erros esperados pelo sistema e interromper o código aqui mesmo
        // quando o erro ainda não é esperado não é uma boa prática utilizar throw new Error
      }

      setTrigger((prev) => !prev);
      // Força a atualização dos dados após a requisição
      // Um gatilho que atera o seu statu apenas para que o hook a seguir seja obrigado a renderizar novamente

      return response.status !== 204 ? await response.json() : null;
      // Retorna o JSON apenas se houver conteúdo
      // verififica o status de response
      // se for diferente de 204 (no content) retorna um objeto json
      // se for 204 ele automaticamente retorna null
    } catch (error) {
      // parte do try que caputra o erro, porém inesperado
      setErro(error.message);
      // muda status para armazenar a mensagem do erro pego em catch
      throw error;
      // finaliza o código lançando o erro de volta
    } finally {
      // parte final da estrutura try
      // SEMPRE executa, mesmo que throw new Error interrompa o código
      // é uma boa pratica inseirir, já que executa o encerramento do estado de carregamento
      setCarregando(false);
      // altera o estado de carregamento
    }
  };

  // Efeito para buscar os dados
  useEffect(() => {
    const fetchData = async () => {
      // função assincrona para fazer a solicitação dos dados
      setCarregando(true);
      // mesmo que acima o carregamento terminou, ali era apenas o "envio das configurações"
      setErro(null);
      // limpamos o estado de erro para realizar uma nova etapa do código e verificar se há erros nessa parte

      try {
        // tente
        const response = await fetch(url);
        // reponse vai aguardar (await) a busca (fecth) da base (url)
        if (!response.ok) {
          // estado de false, se for false executa a proxima linha
          // se reponse.ok for true o código contia a proxima etapa
          throw new Error(`Erro HTTP: ${response.status}`);
          // interrompe o fluxo do códgio e exibe a mensagem dde erro
        }

        const json = await response.json();
        // cria o objeto json
        // espera (await) a resposta (response) ser tranformada em um objeto json (.json())
        setDados(json);
        // altera o estado de dados com o novo objeto json
      } catch (error) {
        setErro(error.message);
        // se der algum erro inesperado, faz a captura do erro e emite ele na tela
      } finally {
        setCarregando(false);
        // mesmo que de erro finaliza, e altra o estado de carregamento
      }
    };

    fetchData();
    // reiniciamos nosso código
    // basicamente o código é "carregado", mas precisamos chamar ele fora de sua estrutura para executar
  }, [url, trigger]);
  // aqui estao as dependencias:
  // url - se ela mudar o useEffect é executado novamente
  // trigger -  sempre vai ser alterado (pela função) httpConfig forçando o useEffect ser executado novamente
  return { dados, httpConfig, carregando, erro };
  // aqui estamos "exportando" para que possamos acessar em app.jsx
};

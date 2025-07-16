import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [trigger, setTrigger] = useState(false); // Estado para forçar atualização

  // Função para configurar e executar requisições HTTP
  const httpConfig = async (data, method) => {
    setCarregando(true);
    setErro(null);

    try {
      const config = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method !== "GET" ? JSON.stringify(data) : undefined,
      };

      let requestUrl = url;

      // Se for DELETE, adiciona o ID na URL
      if (method === "DELETE" && data?.id) {
        requestUrl = `${url}/${data.id}`;
      }

      const response = await fetch(requestUrl, config);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
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

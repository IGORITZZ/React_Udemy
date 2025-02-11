import React from 'react'

const ChangeMessageState = ({ enviarMensagem }) => {
  const mensagens = ["Olá", "Blz", "Como vai?"]
  return (
    <div>
      <button onClick={() => enviarMensagem(mensagens[0])}>1</button>
      <button onClick={() => enviarMensagem(mensagens[1])}>2</button>
      <button onClick={() => enviarMensagem(mensagens[2])}>3</button>
    </div>
  );

};

export default ChangeMessageState
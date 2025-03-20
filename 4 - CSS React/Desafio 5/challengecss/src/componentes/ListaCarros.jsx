import React from 'react'
import "./ListaCarros.componente.css";


const ListaCarros = ({marca, modelo, km, cor}) => {
  return (
    <div className='lista_carros'>
      <p>{marca}</p>
      <p>{modelo}</p>
      <p>{km}</p>
      <p>{cor}</p>
    </div>
  );
}

export default ListaCarros
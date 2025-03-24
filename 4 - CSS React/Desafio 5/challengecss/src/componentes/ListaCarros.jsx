import React from 'react'
import styles from "./ListaCarros.module.css";


const ListaCarros = ({marca, modelo, km, cor}) => {
  return (
    <div className={styles.lista_carros}>
      <p>{marca}</p>
      <p>{modelo}</p>
      <p>{km}</p>
      <p>{cor}</p>
    </div>
  );
}

export default ListaCarros
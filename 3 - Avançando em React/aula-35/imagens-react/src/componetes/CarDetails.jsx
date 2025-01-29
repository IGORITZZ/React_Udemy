import React from 'react'

const CarDetails = ({marca, km, cor}) => {
  return (
    <>
    <h1>Detalhes do carro</h1>
    <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
    </ul>
    </>
  )
}

export default CarDetails
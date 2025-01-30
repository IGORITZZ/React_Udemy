import React from 'react'

const Container = ({children, myvalue}) => {
  return (
    <div>
        <h2>Esse é o titulo</h2>
        {children}
        <p>esse é o meu valor: {myvalue}</p>
    </div>
  )
}

export default Container
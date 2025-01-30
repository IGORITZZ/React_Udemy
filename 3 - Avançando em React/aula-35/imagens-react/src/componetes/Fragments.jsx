import React from 'react'

const Fragments = ({propsFragments}) => {
  return (
    <>
      <h1>Primeiro Titulo</h1>
      <h2>Segunto Titulo</h2>
      <h4>{propsFragments}</h4>
    </>
  );
};

export default Fragments
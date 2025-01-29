const CarDetails = ({marca, km, cor, carroNovo}) => {
  return (
    <>
      <h1>Detalhes do carro</h1>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
        {carroNovo && <p>Esse carro é zero</p>}
        {!carroNovo && <p>Esse carro é usado</p>}
      </ul>
    </>
  );
}

export default CarDetails
const ListaArray = ({nome, idade}) => {
  return (
    <>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        {idade >= 18 ? (
          <p>Pode ter carteira de habilitação</p>
        ) : (
          <p>Não pode ter carteira de habilitação</p>
        )}
      </ul>
    </>
  );
}

export default ListaArray
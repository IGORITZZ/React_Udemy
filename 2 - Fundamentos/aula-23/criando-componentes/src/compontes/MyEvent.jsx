const MyEvent = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o Evento");
  };

  const renderSomenthin = (x) => {
    if (x) {
      return <h1>RENDERIZANDO TRUE</h1>;
    } else {
      return <h1>REDENRIZANDO FALSE</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou também")}>
          Clique Aqui Também
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("Não deveria cliciar, isso está errado");
            }
          }}
        >
          Clique Aqui Também, por favor!!!
        </button>
      </div>
      {renderSomenthin(true)}
      {renderSomenthin(false)}
    </div>
  );
};

export default MyEvent;

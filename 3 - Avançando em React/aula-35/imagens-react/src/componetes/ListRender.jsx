import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Igor", "Laura", "Larissa", "Miguel"]);

  const [users, setUsers] = useState([
    { id: 1, name: "José", age: 27 },
    { id: 2, name: "Mauro", age: 23 },
    { id: 3, name: "Trevis", age: 17 },
  ]);

  const deleteRandom = () => {
      const randonNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((users) => randonNumber !== users.id)
      })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar usuário</button>
    </div>
  );
};

export default ListRender;

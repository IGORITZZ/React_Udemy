import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Igor", "Laura", "Larissa", "Miguel"]);

  const [users, setUsers] = useState([
    { id: 1, name: "José", age: 27 },
    { id: 2, name: "Mauro", age: 23 },
    { id: 3, name: "Trevis", age: 17 },
    { id: 4, name: "Mouses", age: 18 },
  ]);

  const deleteRandom = () =>{
      const randonNumber = Math.floor(Math.random() * 5)

      setUsers((prevUser) => {
        return prevUser.fiter((user) => randonNumber !== user.id)
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
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom()}>Deletar usuário da lista</button>
    </div>
  );
};

export default ListRender;

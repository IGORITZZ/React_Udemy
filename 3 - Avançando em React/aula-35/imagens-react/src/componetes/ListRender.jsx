import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Igor", "Laura", "Larissa", "Miguel"]);

  const [users] = useState([
    { id: 1, name: "José", age: 27 },
    { id: 461968498, name: "Mauro", age: 23 },
    { id: 87417849849, name: "Trevis", age: 17 },
    { id: 423423424222, name: "Mouses", age: 18 },
  ]);
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
    </div>
  );
};

export default ListRender;

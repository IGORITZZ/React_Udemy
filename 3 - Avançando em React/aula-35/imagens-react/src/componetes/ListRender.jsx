import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Igor", "Laura", "Larissa", "Miguel"]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;

import { useState } from 'react'

const LisntsRenders = () => {
    const [list] = useState(['Igor', 'Bruno', 'Thomaz'])

    const [users] = useState([
      {id: 1, name:"Igor", age: 38},
      {id: 68978978, name: 'Bruno', age: 28},
      {id: 54884, name: 'Flávio', age: 18},
      {id: 88896484, name: 'Teros', age: 8}
    ])

  return (
    <div>
      <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ) )}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li> 
          ))}
        </ul>
    </div>
  )
}

export default LisntsRenders
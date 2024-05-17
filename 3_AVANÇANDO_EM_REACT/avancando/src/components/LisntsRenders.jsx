import { useState } from 'react'

const LisntsRenders = () => {
    const [list] = useState(['Igor', 'Bruno', 'Thomaz'])
  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ) )}
        </ul>
    </div>
  )
}

export default LisntsRenders
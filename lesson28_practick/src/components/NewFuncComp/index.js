import React, {useState} from "react";

const MewFuncComp = () => {
  const [users, setUser] = useState(
    [
      {
        id: 1,
        name: 'Ivan',
      },
      {
        id: 2,
        name: 'Petya',
      },
      {
        id: 3,
        name: 'Vasiliy',
      },
      {
        id: 4,
        name: 'Olia',
      },
      {
        id: 5,
        name: 'Igor',
      },
    ],
  )
  return (
    <div>
      {users.map(({id, name}) =>(
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p key={id}>{name}</p>
          <button onClick={()=>{
            setUser(prevState => (prevState.filter(el=>el.id !== id)))
          }}>X</button>
        </div>
      ))}
    </div>
  )
}

export default MewFuncComp;
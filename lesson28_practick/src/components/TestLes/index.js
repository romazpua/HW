import React, {useState} from "react";

const TestLes = () => {
  const [users, setUser] = useState([])
  const [newUser, setNewUser] = useState([])

  const inpAdd = (event) => {
    setNewUser(event.target.value)
  }

  const addNewUser = (event) => {
    event.preventDefault()
    const user = {
      id: Date.now(),
      name: newUser,
    }

    console.log(newUser)

    if (newUser.length > 0) {
      setUser(prevState => [...prevState, user])
    }
    setNewUser('')
  }

  const delUser = (id) => {
    setUser(prevState => prevState.filter(el => el.id !== id))
  }

  return (
    <div>
      {users.map(({id, name}) => (
        <div key={id} style={{display: 'flex', alignItems: 'center'}}>
          <p>{name}</p>
          <button onClick={() => delUser(id)}>удалить юзера
          </button>
        </div>
      ))}
      <div>
        <form onSubmit={event => addNewUser(event)}>
          <input type="text"
                 placeholder='введмте имя нового юзера'
                 name='newUser'
                 onChange={(event) => inpAdd(event)}
                 value={newUser}/>
          <button type={"submit"}>добавить юзера</button>
        </form>
      </div>
    </div>
  )
}
export default TestLes;
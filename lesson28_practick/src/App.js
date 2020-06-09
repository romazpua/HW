import React from "react";
import "./App.scss";
import {Button, Checkbox} from '@material-ui/core';
import {ColorButton} from "./components/CustomComponents/index";
import OurComponent from "./components/CustomComponents/OurComponents/index";
import {v4 as uuidv4} from 'uuid';
import Text from "./components/CustomComponents/OurComponents/text";
import FuncEl from "./components/CustomComponents/OurComponents/FuncEl/index";
import Nav from "./components/CustomComponents/OurComponents/Nav/index";

// function App() {
//   return <div className="App">Functional Component</div>;
// }

class App extends React.Component {
  state = {
    newTodoName: '',
    todos: [
      {
        id: 1,
        text: 'Todo 1',
        done: false,
        deleted: false,
      },
      {
        id: 2,
        text: 'Learn Rect',
        done: false,
        deleted: false,
      },
      {
        id: 3,
        text: 'Do something',
        done: false,
        deleted: false,
      }
    ]
  }
  inputHandler = event => {
    this.setState({
      newTodoName: event.target.value
    })
  }
  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, {
        id: new Date().getTime(),
        text: this.state.newTodoName,
        done: false,
        deleted: false,
      }], newTodoName: ''
    })
  }

  doneTodo = (event, id) => {
    this.setState({
      todos: this.state.todos.map(el => {
        if (el.id === id) {
          return {
            ...el, done: event.target.checked,
          }
        }
        return el
      }),
    })
  }

  editTodo = id => {
    this.setState({
      todos: this.state.todos.map(el => {
        if (el.id === id) {
          return {
            ...el, text: '546545'
          }
        }
        return el
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(el => {
        if (el.id === id) {
          return {
            ...el, deleted: true,
          }
        }
        return el
      }),
    }, () => {
      console.log(this.state.todos);
    })
  }


  render() {
    const {newTodoName, todos} = this.state
    return (
      < div className="App">
        <Nav/>
        <h1>Todo app</h1>
        <div className="filter">
          <Button variant='contained'>All</Button>
          <Button variant='contained' color='primary'>In progerss</Button>
          <ColorButton variant="contained">
            Done
          </ColorButton>
          <Button variant='contained' color='secondary'>Deleted</Button>
        </div>
        <div className="todos">
          {todos.filter(el => el.deleted === false).map(todo => (
            <div className={`todo ${todo.done ? "done" : ""}`}
                 key={todo.id}>
              <Checkbox color="primary" checked={todo.done}
                        onChange={(event) => this.doneTodo(event, todo.id)}/>
              <p>{todo.text}</p>
              <Button
                color='primary'
                variant='contained'
                onClick={() => this.editTodo(todo.id)}>
                Edit
              </Button>
              <Button
                color='secondary'
                variant='outlined'
                onClick={() => this.deleteTodo(todo.id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div className="addTodo">
          <input type="text" value={newTodoName} onChange={this.inputHandler}/>
          <Button color='primary'
                  variant='contained'
                  disabled={!newTodoName}
                  onClick={this.addTodo}>
            Add todo
          </Button>
        </div>
        <OurComponent number={uuidv4()} text={'dfdf'}/>
        <OurComponent number={uuidv4()} text={'dfbbdfsbsfdbsd'}/>
        <Text text='Hello'/>
        <Text text='World'/>
        <FuncEl number={1} text={'bla-bla'}/>
        <FuncEl number={2} text={'bla-bla-bla'}/>
      </div>
    );
  }
}

export default App;
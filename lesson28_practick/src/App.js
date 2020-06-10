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
    currentTab: '',
    todos: [
      {
        id: 1,
        text: 'Todo 1',
        done: true,
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
      },
      {
        id: 4,
        text: 'Do something',
        done: false,
        deleted: true,
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
      }], newTodoName: '',

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

  filter = oueTab => {
    this.setState({
      currentTab: oueTab
    })
  }


  render() {
    const {newTodoName, todos} = this.state
    const allTodos = todos
    const deletedTodos = todos.filter(el => el.deleted === true)
    const inProgressTodos = todos.filter(el => (el.done === false && el.deleted === false))
    const doneTodos = todos.filter(el => el.done === true)
    let todosArr

    switch (this.state.currentTab) {
      case 'all':
        todosArr = allTodos
        break
      case "in progress":
        todosArr = inProgressTodos
        break
      case 'done':
        todosArr = doneTodos
        break
      case 'deleted':
        todosArr = deletedTodos
        break
      default:
        todosArr = allTodos
    }

    return (
      < div className="App">
        <Nav/>
        <h1>Todo app</h1>
        <div className="filter">
          <Button variant='contained' onClick={() => this.filter('all')}>All</Button>
          <Button variant='contained' color='primary' onClick={() => this.filter('in progress')}>In progerss</Button>
          <ColorButton variant="contained" onClick={() => this.filter('done')}>
            Done
          </ColorButton>
          <Button variant='contained' color='secondary' onClick={() => this.filter('deleted')}>Deleted</Button>
        </div>
        <div className="todos">
          {todosArr !== null && todosArr.map(todo => (
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
        {this.state.currentTab !== 'deleted' && (
          <div className="addTodo">
            <input type="text" value={newTodoName} onChange={this.inputHandler}/>
            <Button color='primary'
                    variant='contained'
                    disabled={!newTodoName}
                    onClick={this.addTodo}>
              Add todo
            </Button>
          </div>)}

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
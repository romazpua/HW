import React from "react";
import "./index.scss";
import {Button, Checkbox} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
import CircularProgress from "@material-ui/core/CircularProgress";
import FuncComponent from "../FuncComponent";
import {ColorButton} from "../CustomComponents";
import FuncEl from "../CustomComponents/OurComponents/FuncEl";
import Posts from "../CustomComponents/OurComponents/Posts";
import OurComponent from "../CustomComponents/OurComponents";
import Text from "../CustomComponents/OurComponents/text";
import Nav from "../Nav";
import PropTypes from 'prop-types';

class OldLessons extends React.Component {
  state = {
    newTodoName: '',
    currentTab: 'in progress',
    users: [],
    isLoading: true,
    userName: '',
    age: '',
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

  inputH = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitH = event => {
    event.preventDefault();
    console.log(this.state.userName, this.state.age)
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        this.setState({users: json, isLoading: false})
      })
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
    const {newTodoName, todos, users, isLoading, userName, age} = this.state
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

        Вш возраст: {this.props.age};
        <br/>
        <br/>
        <h2 className={'titleOldLessons'}>OLD-LESSONS </h2>
        <form onSubmit={this.submitH}>
          <input
            type="text"
            name='userName'
            onChange={this.inputH}
            value={userName}/>
          <input
            type="text"
            name='age'
            onChange={this.inputH}
            value={age}/>
          <button type="submit">
            Отправить
          </button>
        </form>

        <FuncComponent uorNewProp={28}/>
        <Nav rows={[1, 2, 3, 4]}/>

        {
          isLoading
            ? <CircularProgress size={30} thickness={5}/>
            : (
              <>
                {users.map(el => (
                  <p key={el.id}>{el.name}</p>
                ))}
              </>
            )
        }

        <Posts/>

        <h1>Todo app</h1>
        <div className="filter">
          <Button variant='contained' onClick={() => this.filter('all')}>All</Button>
          <Button variant='contained' color='primary' onClick={() => this.filter('in progress')}>In
            progerss</Button>
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

OldLessons.propTypes = {
  age: PropTypes.number.isRequired,
}

export default OldLessons;
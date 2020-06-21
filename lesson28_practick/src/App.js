import React from "react";
import {Switch, Route, NavLink} from "react-router-dom";
import Users from "./components/Users";
import {User} from "./components/User";
import {NewPost} from "./components/NewPost/index";
import NewPosts from "./components/NewPosts";
import OldLessons from "./components/OldLessons";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import "./App.scss";
import MewFuncComp from "./components/NewFuncComp";
import Redux from "./components/Redux";
import UseEfect from "./components/UseEfect";


class App extends React.Component {

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        this.setState({users: json, isLoading: false})
      })
  }


  render() {

    return (
      < div className="App">

        <nav>
          <NavLink exact to="/">Главная</NavLink>
          <NavLink exact to="/users">Юзеры</NavLink>
          <NavLink exact to="/posts">Посты</NavLink>
          <NavLink exact to="old-lessons">Old lessons</NavLink>
          <NavLink exact to="/register">Register</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/userefect">UseEfect</NavLink>
          <NavLink exact to="/redux">Redux</NavLink>
        </nav>

        <Switch>

          <Route path="/old-lessons">
            <OldLessons age={25}/>
          </Route>
          <Route exact path="/users">
            <Users/>
          </Route>
          <Route exact path="/posts">
            <NewPosts/>
          </Route>
          <Route exact path="/posts/:id">
            <NewPost/>
          </Route>
          <Route path='/users/:id'>
            <User/>
          </Route>
          <Route exact path="/">
            <MewFuncComp/>
          </Route>
          <Route exact path="/login">
            <LogIn/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/userefect">
            <UseEfect/>
          </Route>
          <Route exact path="/redux">
            <Redux/>
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
import React from "react";
import "./App.scss";
import {Switch, Route, NavLink} from "react-router-dom";
import Users from "./components/Users";
import {User} from "./components/User";
import {NewPost} from "./components/NewPost/index";
import NewPosts from "./components/NewPosts";
import OldLessons from "./components/OldLessons";


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
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/users">Юзеры</NavLink>
          <NavLink to="/posts">Посты</NavLink>
          <NavLink to="old-lessons">Old lessons</NavLink>
        </nav>

        <Switch>

          <Route path="/old-lessons">
            <OldLessons/>
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
            H O M E
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
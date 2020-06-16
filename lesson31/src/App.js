import React from "react";
import "./App.scss";
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/login";

// function App() {
//   return <div className="App">Functional Component</div>;
// }

class App extends React.Component {
  state = {
    userName: '',
    age: '',
  }

  inputH = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitH = event => {
    event.preventDefault()
    console.log(this.state.userName, this.state.age)
  }


  render() {
    const {userName, age} = this.state
    return (
      <div className="App">

        <Login/>

        <Switch>


          <Route path="/old-lessons">
            <form onSubmit={this.submitH}>
              <input
                type="text"
                name='userName'
                value={userName}
                onChange={this.inputH}/>
              <input
                type="text"
                name='age'
                value={age}
                onChange={this.inputH}/>
              <button type='submit'>
                Отправить
              </button>
            </form>
          </Route>

          <Route path='/users'>
            users
          </Route>

          <Route path="/">
            home
          </Route>


        </Switch>


      </div>
    );
  }
}

export default App;

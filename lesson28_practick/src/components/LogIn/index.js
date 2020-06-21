import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class LogIn extends React.Component {

  state = {
    userName: '',
    password: ''
  }

  inputIndef = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitIndef = event => {
    event.preventDefault();
    console.log(this.state.userName, this.state.password)
  }

  render() {
    return (
      <>
        <h2>LogIn</h2>
        <form onSubmit={this.submitIndef}>
          <TextField
            name={'userName'}
            onChange={this.inputIndef}
            variant={"outlined"}
            size={"small"}
            label={'login'}
            fullWidth
            margin={"dense"}
          />
          <TextField
            name={'password'}
            onChange={this.inputIndef}
            variant={"outlined"}
            size={"small"}
            label={'password'}
            fullWidth
            margin={"dense"}
          />
          <Button
            variant={"contained"}
            fullWidth
            color={"primary"}
            type={"submit"}
          >
            Войти
          </Button>
        </form>
        <Button
          component={Link}
          to="/register"
          variant={"contained"}
          fullWidth
          color={"secondary"}
          type={"submit"}>
          Зарегистрироваться
        </Button>
      </>
    )
  }

}

export default LogIn;
import React from "react";

class Login extends React.Component {
  state = {
    usName: '',
    passW: '',
  }


  inputLogin = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault()
    console.log(this.state.usName, this.state.passW)
  }

  render() {
    const {usName, passW} = this.state
    return (
      <form onSubmit={this.submitForm}>

        <input
          type="text"
          name='usName'
          value={usName}
          onChange={this.inputLogin}
        />
        <input
          type="text"
          name='passW'
          value={passW}
          onChange={this.inputLogin}
        />
        <button type='submit'>Войти</button>

      </form>

    )
  }
}

export default Login;
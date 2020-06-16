import React, {Component} from "react";
import {Link} from "react-router-dom";

class Users extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
  }

  render() {

    const {users} = this.state;

    return (
      <>
        {users.map(user =>
          <Link to={`/users/${user.id}`} key={user.id}
                style={{display: 'block', marginBottom: 25}}>{user.name} - {user.email}</Link>
        )}
      </>
    )
  }
}

export default Users;
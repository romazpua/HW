import React, {Component} from "react";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

class Users extends Component {

  state = {
    users: [],
    isLoading: true,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users, isLoading: false}))
  }

  render() {

    const {users, isLoading} = this.state;

    return (
      <>
        {
          isLoading
            ? <CircularProgress size={30} thickness={5}/>
            : (
              <>
                {users.map(user =>
                  <Link to={`/users/${user.id}`} key={user.id}
                        style={{display: 'block', marginBottom: 25}}>{user.name} - {user.email}</Link>
                )}
              </>
            )
         }
      </>
    )
  }
}

export default Users;
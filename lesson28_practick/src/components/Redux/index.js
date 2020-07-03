import React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../actions/usersActions";

class Redux extends React.Component {

  // state = {
  //   users: [
  //     {
  //       id: 1,
  //       name: 'Ivan',
  //     },
  //     {
  //       id: 2,
  //       name: 'Petya',
  //     },
  //     {
  //       id: 3,
  //       name: 'Olya',
  //     },
  //   ],
  // }
  //
  // change = () => {
  //   this.setState({
  //     value: 132
  //   })
  // }

  render() {
    const {usersLocal} = this.props
    return (
      <>
        {usersLocal.length
          ? (
            usersLocal.map(el => (
              <p key={el.id}>{el.name}</p>
            ))
          ) :
          (<p>НЕТ ЮЗЕРОВ</p>)}
        <button onClick={this.props.getUsers}>Получить</button>
      </>
    )
  }
}

const mapStateToProps = (store) => ({
  usersLocal: store.usersRoot.usersFromReducer
})

export default connect(mapStateToProps, {getUsers})(Redux)
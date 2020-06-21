import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = () => dispatch => {

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>dispatch({
      type: 'GET_USERS',
      payload: res.data,
    }))
  // return {
  //   type: 'GET_USERS'
  // }
}
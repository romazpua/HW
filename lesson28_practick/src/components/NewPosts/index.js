import React, {Component} from "react";
import {Link} from "react-router-dom";

class NewPosts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        let tenPost = posts.slice(0, 10)
        this.setState({posts: tenPost})
      })
  }

  render() {

    const {posts} = this.state;

    return (
      <>
        {posts.map(el =>
          <Link to={`/posts/${el.id}`} key={el.id} style={{display: 'block', marginBottom: 20}}>
            Пост {el.id}
          </Link>
        )}
      </>
    )

  }

}

export default NewPosts;
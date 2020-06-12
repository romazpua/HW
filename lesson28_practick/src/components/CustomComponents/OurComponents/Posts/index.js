import React, {PureComponent} from 'react';
import "./index.scss"
import CircularProgress from "@material-ui/core/CircularProgress";

class Posts extends PureComponent {
  state = {
    posts: [],
    loadingPosts: true
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(json => {
        this.setState({posts: json, loadingPosts: false})
      })
  }



  render() {
    return (
      <div className='Posts'>
        {
          this.state.loadingPosts
          ? <CircularProgress size={30} thickness={5}/>
          : (
            <>
              {this.state.posts.slice(0, 10).map(el=>(
                <p key={el.id}>{el.title}</p>
              ))}
            </>
            )
        }
      </div>
    )
  }
}

export default Posts;
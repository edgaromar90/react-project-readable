import React, { Component } from 'react';
import Post from '../Post';
import './ListPosts.css';

class ListPosts extends Component {

  render(){

    return(
      <div className="post-list">
        {this.props.posts.map(post => (
            <Post key={post.id} post={post}/>

          ))}
      </div>
    );
  }
}

export default ListPosts;
import React, { Component } from 'react';
import Post from '../Post';
import './ListPosts.css';

class ListPosts extends Component {

  render(){

    return(
      <div className="post-list row">
        <Post />
        <hr className="col-10" />
        <Post />
        <hr className="col-10" />
        <Post />
        <hr className="col-10" />
        <Post />
        <hr className="col-10" />
        <Post />
      </div>
    );
  }
}

export default ListPosts;
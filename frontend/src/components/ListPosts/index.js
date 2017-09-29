import React, { Component } from 'react';
import Post from '../Post';
import './ListPosts.css';

class ListPosts extends Component {

  render(){

    const { posts, addVotePost, removeVotePost } = this.props;

    return(
      <div className="post-list">
        {posts.map(post => (
            <Post
              key={post.id}
              post={post}
              addVotePost={addVotePost}
              removeVotePost={removeVotePost} />

          ))}
      </div>
    );
  }
}

export default ListPosts;
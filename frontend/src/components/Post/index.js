import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import VoteControllers from '../VoteControllers';

class Post extends Component {

  /**
  **
  *************************** REMEMBER THE COMMENTS ARE TEMPORARILY HARD CODED ********
  **/

  render(){

    const { title, voteScore, body, author, timestamp, category, id } = this.props.post;
    const { addVotePost, removeVotePost } = this.props;

    return(
      <div className="post-wrapper row justify-content-center">
        <VoteControllers
          orientation="PORTRAIT"
          id={id}
          voteScore={voteScore}
          addVotePost={addVotePost}
          removeVotePost={removeVotePost}
        />
        <div className="post-content col-12 col-sm-9">
          <div className="post-title">
            <Link to={`/${category}/${id}`}><h3>{ title }</h3></Link>
          </div>
          <div className="post-body">
            <p>
              { body }
            </p>
            <span>{ category }</span>
          {/* -- REMEMBER HERE -- */}
            <p>3 comments</p>
          </div>
          <div className="post-signature">
            <p><strong>- { author } -</strong></p>
            { timestamp }
          </div>
        </div>
        <VoteControllers
          orientation="LANDSCAPE"
          id={id}
          voteScore={voteScore}
          addVotePost={addVotePost}
          removeVotePost={removeVotePost}
        />
        <hr className="col-10" />
      </div>
    );
  }
}

export default Post;
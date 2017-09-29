import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaEdit, FaTrashO } from 'react-icons/lib/fa';
import './PostDetail.css';
import { connect } from 'react-redux';

import VoteControllers from '../VoteControllers';

import { upVotePost, downVotePost } from '../../actions';

class PostDetail extends Component {

  render(){

    const post = this.props.posts.filter(post => post.id === this.props.match.params.post_id)
    const { title, voteScore, body, author, timestamp, category, id } = post[0];

    return(
      <div className="post-wrapper row justify-content-center">
        <VoteControllers
          orientation="PORTRAIT"
          id={id}
          voteScore={voteScore}
          addVotePost={this.props.addVotePost}
          removeVotePost={this.props.removeVotePost}
        />
        <div className="post-content col-12 col-sm-9">
          <div className="post-title">
            <div className="text-right">
              <FaEdit color={'#007bff'} size={'2.1em'} />
              <FaTrashO color={'#A80110'} size={'2em'} />
            </div>
            <Link to={`/${category}/${id}`}><h3>{ title }</h3></Link>
          </div>
          <div className="post-body">
            <p>
              { body }
            </p>
            <span>{ category }</span>
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
          addVotePost={this.props.addVotePost}
          removeVotePost={this.props.removeVotePost}
        />
      </div>
    );
  }
}

function mapStateToProps ( {posts, comments} ) {
  return {
    posts: posts.allIds.map(id => posts[id])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data)),
    removeVotePost: (data) => dispatch(downVotePost(data)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetail)
);
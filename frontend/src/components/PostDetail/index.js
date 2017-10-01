import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostDetail.css';
import { connect } from 'react-redux';

import VoteControllers from '../VoteControllers';
import { upVotePost, downVotePost, openPostModal, closePostModal } from '../../actions';

import PostOptions from '../PostOptions';

class PostDetail extends Component {

  render(){

    const post = this.props.posts.filter(post => post.id === this.props.match.params.post_id)[0];
    const { title, voteScore, body, author, timestamp, category, id } = post;
    const { addVotePost, removeVotePost, openModal, closeModal, modalToOpen } = this.props;

    return(
      <div className="post-wrapper row justify-content-center">
        <VoteControllers
          orientation="PORTRAIT"
          id={id}
          voteScore={voteScore}
          addVotePost={addVotePost}
          removeVotePost={removeVotePost}
        />
        <div className="align-baseline post-content col-12 col-sm-9">
          <div className="row justify-content-between">
            <div className="col-10 col-lg-11 post-title">
              <h3>{ title }</h3>
            </div>
            <PostOptions modalToOpen={modalToOpen} modalId={id} openModal={openModal} closeModal={closeModal} post={post}/>
          </div>
          <div className="post-body">
            <p>{ body } </p>
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
          addVotePost={addVotePost}
          removeVotePost={removeVotePost}
        />
      </div>
    );
  }
}

function mapStateToProps ( {posts, comments, modalPost, modalToOpen} ) {
  return {
    posts: posts.allIds.map(id => posts[id]),
    isModalOpened: modalPost,
    modalToOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data)),
    removeVotePost: (data) => dispatch(downVotePost(data)),
    openModal: (id) => dispatch(openPostModal(id)),
    closeModal: (id) => dispatch(closePostModal(id))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetail)
);
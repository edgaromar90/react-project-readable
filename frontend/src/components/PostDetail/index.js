import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaEdit, FaTrashO } from 'react-icons/lib/fa';
import './PostDetail.css';
import { connect } from 'react-redux';

import VoteControllers from '../VoteControllers';
import CreateEditPost from '../CreateEditPost';
import { upVotePost, downVotePost, openPostModal, closePostModal } from '../../actions';

class PostDetail extends Component {

  render(){

    const post = this.props.posts.filter(post => post.id === this.props.match.params.post_id);
    const { title, voteScore, body, author, timestamp, category, id } = post[0];
    const { addVotePost, removeVotePost, openModal, closeModal, isModalOpened } = this.props;

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
            <div className="text-right">
              <FaEdit className="align-baseline" color={'#007bff'} size={'2.3em'} onClick={() => openModal()} />
              <FaTrashO className="align-top" color={'#A80110'} style={ {margin:'0 10px'} } size={'2.1em'} />
            </div>
            <h3>{ title }</h3>
            <CreateEditPost modalTitle={'Edit Post'} isModalOpened={isModalOpened} closeModal={() => closeModal() }/>
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
          addVotePost={addVotePost}
          removeVotePost={removeVotePost}
        />
      </div>
    );
  }
}

function mapStateToProps ( {posts, comments, modalPost} ) {
  return {
    posts: posts.allIds.map(id => posts[id]),
    isModalOpened: modalPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data)),
    removeVotePost: (data) => dispatch(downVotePost(data)),
    openModal: () => dispatch(openPostModal()),
    closeModal: () => dispatch(closePostModal())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetail)
);
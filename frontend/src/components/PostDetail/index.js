import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaEdit, FaTrashO } from 'react-icons/lib/fa';
import './PostDetail.css';
import { connect } from 'react-redux';

import VoteControllers from '../VoteControllers';
import CreateEditPost from '../CreateEditPost';
import { upVotePost, downVotePost, openPostModal, closePostModal } from '../../actions';
import { FaEllipsisV } from 'react-icons/lib/fa';


class PostDetail extends Component {

  state = {
    displayOptions: false
  }

  toggleOptions = () => {
    this.setState(prevState => ({displayOptions: !prevState.displayOptions}));
  }

  closeOptions = () => {
    this.setState({displayOptions: false});
  }

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
        <div className="align-baseline post-content col-12 col-sm-9">
          <div className="row justify-content-between">
            <div className="col-10 col-lg-11 post-title">
              <h3>{ title }</h3>
            </div>
            <div className="v-ellipsis-wrapper col-2 col-lg-1">
              <FaEllipsisV className="ellipsis-icon" color={'#ccc'} size={'3em'} onClick={this.toggleOptions} />
              { this.state.displayOptions &&
                (<div className="text-left options-wrapper">
                  <FaEdit className="edit-icon" color={'#007bff'} size={'2.1em'} onClick={() => {
                    this.toggleOptions()
                    openModal()
                  }} />
                  <FaTrashO className="trash-o-icon" color={'#A80110'} size={'2.2em'} />
                </div>)}
            </div>
          </div>
          <CreateEditPost modalTitle={'Edit Post'} isModalOpened={isModalOpened} closeModal={() => closeModal() }/>
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
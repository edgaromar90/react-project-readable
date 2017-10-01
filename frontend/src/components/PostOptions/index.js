import React, { Component } from 'react';
import CreateEditPost from '../CreateEditPost';
import { FaEdit, FaTrashO, FaEllipsisV } from 'react-icons/lib/fa';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { openPostModal, closePostModal } from '../../actions';
import './PostOptions.css';

class PostOptions extends Component {

  state = {
    displayOptions: false
  }

  toggleOptions = () => {
    this.setState(prevState => ({displayOptions: !prevState.displayOptions}));
  }

  closeOptions = () => {
    this.setState({displayOptions: false});
  }

  render() {

    const { openModal, closeModal, modalToOpen, post } = this.props;

    return (
      <div className="v-ellipsis-wrapper col-2 col-lg-1">
        <FaEllipsisV className="ellipsis-icon" color={'#ccc'} size={'2.2em'} onClick={this.toggleOptions} />
        { this.state.displayOptions &&
          (<div className="text-left options-wrapper">
            <FaEdit className="edit-icon" color={'#007bff'} size={'2.1em'} onClick={() => {
              openModal(post.id)
              this.toggleOptions()
            }} />
            <FaTrashO className="trash-o-icon" color={'#A80110'} size={'2.2em'} />
          </div>)}
        <CreateEditPost
          modalTitle={'Edit Post'}
          modalToOpen={modalToOpen}
          modalId={post.id}
          closeModal={closeModal}
          post={post} />
      </div>
    );
  }
}

function mapStateToProps ( {modalToOpen} ) {
  return {
    modalToOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    openModal: (id) => dispatch(openPostModal(id)),
    closeModal: (id) => dispatch(closePostModal(id))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostOptions)
);
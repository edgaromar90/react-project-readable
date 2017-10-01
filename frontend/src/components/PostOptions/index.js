import React, { Component } from 'react';
import CreateEditPost from '../CreateEditPost';
import { FaEdit, FaTrashO, FaEllipsisV } from 'react-icons/lib/fa';

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
        <FaEllipsisV className="ellipsis-icon" color={'#ccc'} size={'3em'} onClick={this.toggleOptions} />
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

export default PostOptions;
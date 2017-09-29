import React, { Component } from 'react';
import Modal from 'react-modal';
import './CreateEditPost.css';

class CreateEditPost extends Component {

  render() {

    // PASS ACTIONS CREATORS AS PROPS
    // -> Create Post
    // -> Edit Post

    const { closeModal, isModalOpened, modalTitle } = this.props;

    return (
      <div className="post-form row justify-content-center create-post">
        <Modal
          isOpen={isModalOpened}
          overlayClassName='overlay'
          onRequestClose={closeModal}
          closeTimeoutMS={50}
          contentLabel='Modal'
          className='custom-modal'
          >
          <div className="row justify-content-center">
            <div className="col-12 text-right">
              <button className="btn btn-sm btn-danger" onClick={closeModal}>close</button>
            </div>
            <div className="col-12 header-modal text-center">
              <span className="h4"><strong>{ modalTitle }</strong></span>
            </div>
            <form className="col-12 col-lg-8 col-xl-6">
              <div className="form-group">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <select defaultValue="none" className="form-control" id="exampleFormControlSelect1">
                  <option value="none" disabled={true}>Choose Category</option>
                  <option value="Udacity">Udacity</option>
                  <option value="Redux">Redux</option>
                  <option value="React">React</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="7" placeholder="Write your post here..."></textarea>
              </div>
            </form>
            <div className="col-12 text-center">
              <button className="btn btn-success">Save</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateEditPost;
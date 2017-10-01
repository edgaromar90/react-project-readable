import React, { Component } from 'react';
import Modal from 'react-modal';
import './CreateEditPost.css';

class CreateEditPost extends Component {

  render() {

    const { closeModal, modalToOpen, modalTitle, modalId, post } = this.props;
    let title, author, body, category;

    if(post){
      ({title, author, body, category} = post);
    }
    return (
      <div className="post-form row justify-content-center create-post">
        <Modal
          isOpen={modalToOpen === modalId}
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
                <input type="text" className="form-control" placeholder="Title" value={title}/>
              </div>
              <div className="form-group">
                <select defaultValue={category ? category : "none"} className="form-control" id="exampleFormControlSelect1">
                  <option value="none" disabled={true}>Choose Category</option>
                  <option value="udacity">Udacity</option>
                  <option value="redux">Redux</option>
                  <option value="react">React</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Author" value={author}/>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="7" placeholder="Write your post here..." value={body ? body : ''}></textarea>
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
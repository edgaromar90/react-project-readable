import React, { Component } from 'react';
import Modal from 'react-modal';
import './CreateEditPost.css';

class CreateEditPost extends Component {

  state = {
    modalOpen: false
  }

  openModal = () => {
    this.setState({modalOpen:true})
  }

  closeModal = () => {
    this.setState({modalOpen:false})
  }

  render() {

    const { modalOpen } = this.state;

    return (
      <div className="post-form row justify-content-center create-post">

        <div className="col-12 text-center">
          <button onClick={this.openModal} type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
            CREATE POST
          </button>
        </div>
        <Modal
          isOpen={modalOpen}
          overlayClassName='overlay'
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          contentLabel='Modal'
          className='custom-modal'
          >
          <div className="row justify-content-center">
            <div className="col-12 text-right">
              <button className="btn btn-sm btn-danger" onClick={this.closeModal}>close</button>
            </div>
            <div className="col-12 header-modal text-center">
              <span className="h4"><strong>Create or Edit Post</strong></span>
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
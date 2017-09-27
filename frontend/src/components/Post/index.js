import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaThumbsOUp, FaThumbsODown, FaThumbsDown } from 'react-icons/lib/fa';
import './Post.css';

class Post extends Component {

  state = {
    activeThumbsUp: false,
    activeThumbsDown: false
  }

  setActiveThumbsUp = () => {
    this.setState(prevState => ({
      activeThumbsUp: !prevState.activeThumbsUp,
      activeThumbsDown: false
    }));
  }

  setActiveThumbsDown = () => {
    this.setState(prevState => ({
      activeThumbsDown: !prevState.activeThumbsDown,
      activeThumbsUp: false
    }));
  }

  thumbsUp = () => {
    return (
      <div onClick={this.setActiveThumbsUp}>
        { this.state.activeThumbsUp
          ? (<FaThumbsUp color={'#018010'} size={'2em'} />)
          : (<FaThumbsOUp color={'#018010'} size={'2em'} />)
        }
      </div>
    );
  }

  thumbsDown = () => {
    return (
      <div onClick={this.setActiveThumbsDown}>
        { this.state.activeThumbsDown
          ? (<FaThumbsDown color={'#A80110'} size={'2em'} />)
          : (<FaThumbsODown color={'#A80110'} size={'2em'} />)
        }
      </div>
    );
  }

  render(){

    const { title, voteScore, body, author, timestamp, category, id } = this.props.post;

    return(
      <div className="post-wrapper row justify-content-center">
        <div className="d-none d-sm-block post-vote col-12 col-sm-2 col-lg-1">
          { this.thumbsUp() }
          <p>{voteScore}</p>
          { this.thumbsDown() }
        </div>
        <div className="post-content col-12 col-sm-9">
          <div className="post-title">
            <Link to={`/${category}/${id}`}><h3>{ title }</h3></Link>
          </div>
          <div className="post-body">
            <p>
              { body }
            </p>
            <span>{ category }</span>
            <p>3 comments</p>
          </div>
          <div className="post-signature">
            <p><strong>- { author } -</strong></p>
            { timestamp }
          </div>
        </div>
        <div className="d-flex d-sm-none post-vote col-12 col-sm-2 col-lg-1">
          { this.thumbsUp() }
          <p style={ {margin:'0 15px'} }>{voteScore}</p>
          { this.thumbsDown() }
        </div>
        <hr className="col-10" />
      </div>
    );
  }
}

export default Post;
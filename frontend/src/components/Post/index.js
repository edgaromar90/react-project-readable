import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaThumbsOUp, FaThumbsODown, FaThumbsDown } from 'react-icons/lib/fa';
import './Post.css';

class Post extends Component {

  state = {
    id: 123,
    timestamp: '09/21/2017',
    title: 'Post Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat in turpis non rhoncus. Duis ut varius massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vestibulum euismod lectus sed convallis. Aliquam at felis tincidunt, faucibus nunc sed, hendrerit massa. Cras sodales, quam ut auctor ultrices, mi lorem euismod purus, sit amet scelerisque diam nisi eget orci. Proin feugiat tempor aliquam. Duis suscipit efficitur risus et finibus. Praesent imperdiet leo ligula, vitae malesuada lectus ornare ut. Aliquam orci urna, consectetur eu leo sit amet, porta tincidunt odio.',
    author: 'Author',
    category: 'category',
    voteScore: 1,
    deleted: false,
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

    const { title, voteScore, body, author, timestamp, category, id } = this.state;

    return(
      <div className="post-wrapper row justify-content-center">
        <div className="d-none d-sm-block post-vote col-12 col-sm-2 col-lg-1">
          { this.thumbsUp() }
          <p>{voteScore}</p>
          { this.thumbsDown() }
        </div>
        <div className="post-content col-12 col-sm-9">
          <div className="post-title">
            <Link to={`/${category}/:${id}`}><h3>{ title }</h3></Link>
          </div>
          <div className="post-body">
            <p>
              { body.slice(0,200) }...
            </p>
            <span>{ category }</span>
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
      </div>
    );
  }
}

export default Post;
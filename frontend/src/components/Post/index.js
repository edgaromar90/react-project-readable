import React, { Component } from 'react';
import { FaThumbsUp, FaThumbsOUp, FaThumbsODown, FaThumbsDown } from 'react-icons/lib/fa';
import './Post.css';

class Post extends Component {

  state = {
    timestamp: '09/21/2017',
    title: 'Post Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat in turpis non rhoncus. Duis ut varius massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vestibulum euismod lectus sed convallis. Aliquam at felis tincidunt, faucibus nunc sed, hendrerit massa. Cras sodales, quam ut auctor ultrices, mi lorem euismod purus, sit amet scelerisque diam nisi eget orci. Proin feugiat tempor aliquam. Duis suscipit efficitur risus et finibus. Praesent imperdiet leo ligula, vitae malesuada lectus ornare ut. Aliquam orci urna, consectetur eu leo sit amet, porta tincidunt odio.',
    author: 'Author',
    category: 'category',
    voteScore: 1,
    deleted: false,
  }

  render(){

    const { title, voteScore, body, author, timestamp, category } = this.state;

    return(
      <div className="post-wrapper row justify-content-center">
        <div className="post-vote col-2 col-lg-1">
          <FaThumbsOUp color={'#018010'} size={'2em'} />
          <p>{voteScore}</p>
          <FaThumbsODown color={'#A80110'} size={'2em'} />
        </div>
        <div className="post-content col-9">
          <div className="post-title">
            <h3>{ title }</h3>
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


      </div>
    );
  }
}

export default Post;
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaThumbsUp, FaThumbsOUp, FaThumbsODown, FaThumbsDown } from 'react-icons/lib/fa';
import './PostDetail.css';
import { connect } from 'react-redux';

import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../../actions';

class PostDetail extends Component {

  state = {
    activeThumbsUp: false,
    activeThumbsDown: false
  }

  setActiveThumbsUp = (id) => {
    if(!this.state.activeThumbsUp){
      this.props.addVotePost(id);
    }
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

  thumbsUp = (id) => {
    console.log(id);
    return (
      <div onClick={() => this.setActiveThumbsUp(id)}>
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

    const post = this.props.posts.filter(post => post.id === this.props.match.params.post_id)
    const { title, voteScore, body, author, timestamp, category, id } = post[0];

    return(
      <div className="post-wrapper row justify-content-center">
        {console.log("POST DETAIL VIEW")}
        <div className="d-none d-sm-block post-vote col-12 col-sm-2 col-lg-1">
          { this.thumbsUp(id) }
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
          </div>
          <div className="post-signature">
            <p><strong>- { author } -</strong></p>
            { timestamp }
          </div>
        </div>
        <div className="d-flex d-sm-none post-vote col-12 col-sm-2 col-lg-1">
          { this.thumbsUp(id) }
          <p style={ {margin:'0 15px'} }>{voteScore}</p>
          { this.thumbsDown() }
        </div>
      </div>
    );
  }
}

function mapStateToProps ( {posts, comments} ) {
  return {
    posts: posts.allIds.map(id => posts[id])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetail)
);
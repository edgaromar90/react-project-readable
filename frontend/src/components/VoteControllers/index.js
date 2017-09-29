import React, { Component } from 'react';
import { FaThumbsUp, FaThumbsOUp, FaThumbsODown, FaThumbsDown } from 'react-icons/lib/fa';

class VoteControllers extends Component {

  state = {
    activeThumbsUp: false,
    activeThumbsDown: false
  }

  setActiveThumbsUp = (id) => {
    if(!this.state.activeThumbsUp){
      this.props.addVotePost(id);
    }else {
      this.props.removeVotePost(id);
    }
    this.setState(prevState => ({
      activeThumbsUp: !prevState.activeThumbsUp,
      activeThumbsDown: false
    }));
  }

  setActiveThumbsDown = (id) => {
    if(!this.state.activeThumbsDown){
      this.props.removeVotePost(id);
    }else {
      this.props.addVotePost(id);
    }
    this.setState(prevState => ({
      activeThumbsDown: !prevState.activeThumbsDown,
      activeThumbsUp: false
    }));
  }

  thumbsUp = (id) => {
    return (
      <div onClick={() => this.setActiveThumbsUp(id)}>
        { this.state.activeThumbsUp
          ? (<FaThumbsUp color={'#018010'} size={'2em'} />)
          : (<FaThumbsOUp color={'#018010'} size={'2em'} />)
        }
      </div>
    );
  }

  thumbsDown = (id) => {
    return (
      <div onClick={() => this.setActiveThumbsDown(id)}>
        { this.state.activeThumbsDown
          ? (<FaThumbsDown color={'#A80110'} size={'2em'} />)
          : (<FaThumbsODown color={'#A80110'} size={'2em'} />)
        }
      </div>
    );
  }

  render() {

    const { orientation, id, voteScore } = this.props;
    const scoreStyle = { margin:'0 15px' };
    const PORTRAIT = 'PORTRAIT';

    return (
      <div className="col-12 col-sm-2 col-lg-1">
      { orientation === PORTRAIT
        ? (<div className="d-none d-sm-block post-vote">
            { this.thumbsUp(id) }
            <p>{voteScore}</p>
            { this.thumbsDown(id) }
          </div>)
        : (<div className="d-flex d-sm-none post-vote">
            { this.thumbsUp(id) }
            <p style={ scoreStyle }>{voteScore}</p>
            { this.thumbsDown(id) }
          </div>)
      }
      </div>
    );
  }
}

export default VoteControllers;
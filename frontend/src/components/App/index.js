import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
import PostDetail from '../PostDetail';
import { FaNewspaperO } from 'react-icons/lib/fa';
import './App.css';
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../../actions';

class App extends Component {
  state={
    filter: 'byVote',
    categories: [
      'Udacity',
      'React',
      'Redux'
    ]
  }

  render() {

    const logoStyle = { margin:'0 5px 0 10px' }

    return (
      <div className="app container-fluid">
        <div className="header-app row">
          { this.props.posts[0].voteScore }
          <FaNewspaperO color={'#fff'} size={'2em'} style={logoStyle} onClick={() => this.props.addVotePost("8xf0y6ziyjabvozdd253nd")}/>
          <h3>Readable</h3>
        </div>
        <Route exact path="/" render={() => <Redirect to="/all" />}/>
        <Route exact path="/:category" render={(props) => (
          <div className="root-view">
          {props.match.params.category}
            <div className="container">
              <CreateEditPost />
            </div>
            <div className="container">
              <ListCategories categories={this.state.categories} />
            </div>
            <div className="container">
              <ListPosts />
            </div>
          </div>
        )} />
        <Route path="/:category/:post_id" component={PostDetail}/>
      </div>
    );
  }
}

function mapStateToProps ({ posts, comments, categories}) {
  return {
    posts: posts.allIds.map(id => posts[id]),
    categories: categories.allCategories.map(cat => categories[cat])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
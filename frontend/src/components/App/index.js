import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
import PostDetail from '../PostDetail';
import { FaNewspaperO } from 'react-icons/lib/fa';
import './App.css';
import { openPostModal, closePostModal, upVotePost, downVotePost } from '../../actions';

class App extends Component {

  render() {

    const logoStyle = { margin:'0 5px 0 10px' };
    const { categories, posts, openModal, closeModal, isModalOpened, addVotePost, removeVotePost } = this.props;

    return (
      <div className="app container-fluid">
        {/* Header */}
        <div className="header-app row">
          <FaNewspaperO color={'#fff'} size={'2em'} style={logoStyle} />
          <h3>Readable</h3>
        </div>
        {/* - End of Header - */}

        <Route exact path="/" render={({history}) => <Redirect to="/all" /> }/>

        {/* - Root View - */}
        <Route exact path="/:category" render={(props) => (
          <div className="root-view">
            <div className="container-fluid">
              <div className="col-12 text-center">
                <button onClick={() => openModal() } type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                  CREATE POST
                </button>
              </div>
              <CreateEditPost isModalOpened={isModalOpened} closeModal={() => closeModal() }/>
            </div>
            <div className="container-fluid">
              <ListCategories categories={categories} />
            </div>
            <div className="container-fluid">
              <ListPosts posts={posts} addVotePost={addVotePost} removeVotePost={removeVotePost} />
            </div>
          </div>
        )} />
        {/* - End of Root View - */}

        {/* - Dinamically create a route for each category in the Store - */}
        { categories.map(category =>
          <Route key={category.path} exact path={`/${category.path}/:post_id`} component={PostDetail}/>
        ) }

      </div>
    );
  }
}

function mapStateToProps ({ posts, comments, categories, modalPost }) {
  const { filterBy } = posts;
  const showPosts = posts.allIds.map(id => posts[id]);
  return {
    posts: filterBy ? showPosts.filter(post => post.category === filterBy) : showPosts,
    categories: categories.allCategories.map(cat => categories[cat]),
    isModalOpened: modalPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data)),
    removeVotePost: (data) => dispatch(downVotePost(data)),
    openModal: () => dispatch(openPostModal()),
    closeModal: () => dispatch(closePostModal())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
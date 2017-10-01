import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
import PostDetail from '../PostDetail';
import { FaNewspaperO, FaPlus } from 'react-icons/lib/fa';
import './App.css';
import { openPostModal, closePostModal, upVotePost, downVotePost } from '../../actions';

class App extends Component {

  render() {

    const logoStyle = { margin:'0 5px 0 10px' };
    const { categories, posts, openModal, closeModal, modalToOpen, addVotePost, removeVotePost } = this.props;

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
              <div className="create-post">
                <button className="btn btn-success" onClick={() => openModal('create_post') }>
                  <FaPlus size={'1em'} color={'#fff'} />
                </button>
              <CreateEditPost
                modalTitle={'Create Post'}
                modalToOpen={modalToOpen}
                modalId={'create_post'}
                closeModal={() => closeModal() }/>
            </div>
            <div className="container-fluid">
              <ListCategories categories={categories} />
            </div>
            <div className="container-fluid">
              <ListPosts
                posts={posts}
                addVotePost={addVotePost}
                removeVotePost={removeVotePost}
                modalToOpen={modalToOpen} openModal={openModal} closeModal={closeModal} />
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

function mapStateToProps ({ posts, comments, categories, modalPost, modalToOpen }) {
  const { filterBy } = posts;
  const showPosts = posts.allIds.map(id => posts[id]);
  return {
    posts: filterBy ? showPosts.filter(post => post.category === filterBy) : showPosts,
    categories: categories.allCategories.map(cat => categories[cat]),
    isModalOpened: modalPost,
    modalToOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addVotePost: (data) => dispatch(upVotePost(data)),
    removeVotePost: (data) => dispatch(downVotePost(data)),
    openModal: (id) => dispatch(openPostModal(id)),
    closeModal: (id) => dispatch(closePostModal(id))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
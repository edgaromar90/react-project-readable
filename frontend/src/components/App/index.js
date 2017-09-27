import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
import PostDetail from '../PostDetail';
import { FaNewspaperO } from 'react-icons/lib/fa';
import './App.css';
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../../actions';

class App extends Component {

  render() {

    const logoStyle = { margin:'0 5px 0 10px' };
    const { categories, posts } = this.props;

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
            {console.log("ROOT VIEW")}
            {props.match.params.category}
            <div className="container-fluid">
              <CreateEditPost />
            </div>
            <div className="container-fluid">
              <ListCategories categories={categories} />
            </div>
            <div className="container-fluid">
              <ListPosts posts={posts} />
            </div>
          </div>
        )} />
        {/* - End of Root View - */}

        { categories.map(category =>
          <Route exact path={`/${category.path}/:post_id`} component={PostDetail}/>
        ) }

      </div>
    );
  }
}

function mapStateToProps ({ posts, comments, categories}) {
  const { filterBy } = posts;
  console.log(filterBy);
  const showPosts = posts.allIds.map(id => posts[id]);
  return {
    posts: filterBy ? showPosts.filter(post => post.category === filterBy) : showPosts,
    categories: categories.allCategories.map(cat => categories[cat])
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
  )(App)
);
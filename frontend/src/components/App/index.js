import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
import PostDetail from '../PostDetail';
import { FaNewspaperO } from 'react-icons/lib/fa';
import './App.css';

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

    return (
      <div className="app container-fluid">
        <div className="header-app row">
          <FaNewspaperO color={'#fff'} size={'2em'} style={ {margin:'0 5px 0 10px'} }/>
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

export default App;

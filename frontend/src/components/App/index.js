import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
import CreateEditPost from '../CreateEditPost';
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
    );
  }
}

export default App;

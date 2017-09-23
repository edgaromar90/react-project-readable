import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import ListCategories from '../ListCategories';
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
          <FaNewspaperO color={'#fff'} size={'3em'} style={ {margin:'0 10px 0 10px'} }/>
          <h1>Readable</h1>
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

import React, { Component } from 'react';
import { FaFilter } from 'react-icons/lib/fa';
import './ListCategories.css';

class ListCategories extends Component {

  render() {
    return (
      <div className="list-categories row justify-content-center">
        <div className="col-12 col-lg-10 text-right">
          <small>[ show all ]</small>
        </div>
        <div className="col-12 col-lg-8">
          <FaFilter size={'1.5em'} /><span style={ {fontSize:'1.5em'} } className="align-middle"> Categories:</span>
        </div>
        <div className="col-12 col-lg-8 categories-group">
          {this.props.categories.map( cat =>
            <button type="button" key={cat.name} className="btn btn-primary col-3 col-lg-2" style={ {margin:'0 5px'} }>{cat.name}</button>
          )}
        </div>
        <div className="col-12 col-lg-10 text-right sort-menu">
          <span><strong>Sort By: </strong></span>
            <select className="custom-select">
              <option defaultValue="HIGHEST_VOTE">Highest vote</option>
              <option value="MOST_RECENT">Most recent</option>
              <option value="AUTHOR_A_Z">Author A-Z</option>
            </select>
        </div>
      </div>
    );
  }
}

export default ListCategories;

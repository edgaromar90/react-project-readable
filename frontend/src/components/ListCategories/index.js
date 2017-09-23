import React, { Component } from 'react';
import { FaCaretDown, FaFilter } from 'react-icons/lib/fa';
import './ListCategories.css';

class ListCategories extends Component {

  render() {

    return (
      <div className="list-categories row">
          <div className="col-12 text-right">
            <small>[ show all ]</small>
          </div>
          <div className="col-12">
            <FaFilter size={'1.5em'} /><span style={ {fontSize:'1.5em'} } className="align-middle"> Categories:</span>
          </div>
          <div className="col-12 categories-group text-center">
            {this.props.categories.map( cat =>
              <button type="button" key={cat} className="btn btn-primary col-3 col-lg-2" style={ {margin:'0 5px'} }>{cat}</button>
            )}
          </div>
          <div className="col-12 text-right sort-menu">
            <span><strong>Sort By: </strong></span>
              <select className="custom-select">
                <option selected>Highest Vote</option>
                <option value="1">Date</option>
                <option value="2">Author A-Z</option>
              </select>
          </div>
      </div>
    );
  }
}

export default ListCategories;

import React, { Component } from 'react';
import { FaCaretDown, FaFilter } from 'react-icons/lib/fa';
import './ListCategories.css';

class ListCategories extends Component {

  render() {

    return (
      <div className="list-categories row">
          <div className="col-12 text-right">
            <small>[ x clear filter ]</small>
          </div>
          <div className="col-12">
            <FaFilter size={'1.5em'} /><span style={ {fontSize:'1.5em'} } className="align-middle"> Filters:</span>
          </div>
          <div className="col-12 categories-group text-center">
            {this.props.categories.map( cat =>
              <button type="button" key={cat} className="btn btn-outline-primary col-4 col-lg-2">{cat}</button>
            )}
          </div>
          <div className="col-12 text-right">
            <p><strong>Sort By:</strong> Highest Vote</p>
          </div>
      </div>
    );
  }
}

export default ListCategories;

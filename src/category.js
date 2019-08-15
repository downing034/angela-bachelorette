import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {

  render() {
    const { categoryText } = this.props
    return (
      <th className="category-header">
        <div>
          {categoryText}
        </div>
      </th>
    );
  }
}

Category.displayName = 'Category'

Category.propTypes = {
  categoryText: PropTypes.string.isRequired
}

export default Category;

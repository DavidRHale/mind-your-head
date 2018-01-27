import React from 'react';

class TrackerDropdown extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>{ this.props.title }</h2>
        <p>Exercise at more than 30 minutes with what intensity?</p>
        <div className="dropdown-image-container">
          <select onChange={ this.props.onChange }>
            <option value="0">None</option>
            <option value="2">Mild</option>
            <option value="4">Moderate</option>
            <option value="6">High</option>
          </select>
          <img src={ this.props.icon } className="slider-icon-right"/>
        </div>
        <button className="btn btn-primary" onClick={ this.props.onClick }>Add</button>
      </div>
    );
  }
}

export default TrackerDropdown;
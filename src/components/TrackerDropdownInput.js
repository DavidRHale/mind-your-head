import React from 'react';

class TrackerDropdown extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>Exercise at more than 30 minutes with what intensity?</p>
        <select onChange={ this.props.onChange }>
          <option value="0">None</option>
          <option value="1">Mild</option>
          <option value="2">Moderate</option>
          <option value="3">High</option>
        </select>
        <button className="btn btn-primary" onClick={ this.props.onClick }>Add</button>
      </div>
    );
  }
}

export default TrackerDropdown;
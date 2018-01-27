import React from 'react';

class TrackerSliderInput extends React.Component {
  render() {
    return (
      <div className="input-card card">
        <h2>{ this.props.title }</h2>
        <input 
          type="range" 
          value={this.props.value} 
          onChange={ this.props.onChange } 
          min="0"
          max="10"
        />
        <button className="btn btn-primary" onClick={ this.props.onClick }>Add</button>
      </div>
    );
  }
}

export default TrackerSliderInput;
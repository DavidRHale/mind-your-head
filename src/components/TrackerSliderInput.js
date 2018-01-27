import React from 'react';

class TrackerSliderInput extends React.Component {
  render() {
    return (
      <div className="input-card card">
        <h2>{ this.props.title }</h2>
        <div className="slider-row-wrapper">
          <img src={this.props.negativeIcon} className="slider-icon-left" alt=""/>
          <input 
            className=""
            type="range" 
            value={this.props.value} 
            onChange={ this.props.onChange } 
            min="0"
            max="10"
          />
          <img src={this.props.positiveIcon} className="slider-icon-right" alt=""/>
        </div>
        <button className="btn btn-primary" onClick={ this.props.onClick }>Add</button>
      </div>
    );
  }
}

export default TrackerSliderInput;
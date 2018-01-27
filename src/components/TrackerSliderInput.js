import React from 'react';

class TrackerSliderInput extends React.Component {
  render() {
    return (
      <div className="input-card card">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.value }</p>
        <div className="slider-row-wrapper">
          <div className="image-box">
            <img src={this.props.negativeIcon} className="slider-icon-left" alt=""/>
            <p>{ this.props.negativeLabel }</p>
          </div>
          <input 
            className=""
            type="range" 
            value={this.props.value} 
            onChange={ this.props.onChange } 
            min="0"
            max="10"
          />
          <div className="image-box">
            <img src={this.props.positiveIcon} className="slider-icon-right" alt=""/>
            <p>{ this.props.positiveLabel }</p>      
          </div>
        </div>
        <button className="btn btn-primary slider-button" onClick={ this.props.onClick }>Add</button>
      </div>
    );
  }
}

export default TrackerSliderInput;
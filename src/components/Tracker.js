import React from 'react';
import InputSlider from 'react-input-slider';
import { Link } from 'react-router-dom';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moodValue: 50
    }
  }

  render() {
    return (
      <div className="tracker-wrapper">
        <div className="input-section">
          <div className="input-wrapper">
            <h3>Mood</h3>
            <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
          </div>
          <div className="input-wrapper">
            <h3>Anxiety</h3>
            <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
          </div>
          <div className="input-wrapper">
            <h3>Exercise</h3>
            <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
          </div>
          <div className="input-wrapper">
            <h3>Appetite</h3>
            <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
          </div>
        </div>
        <div className="graph-wrapper">
        </div>
      </div>
    );
  }
}

export default Tracker;
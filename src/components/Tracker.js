import React from 'react';
import InputSlider from 'react-input-slider';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moodValue: 50
    }
  }

  render() {
    return (
      <div className="container tracker-wrapper">
        <h3>Model</h3>
        <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
      </div>
    );
  }
}

export default Tracker;
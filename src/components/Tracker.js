import React from 'react';
import InputSlider from 'react-input-slider';
import { Link } from 'react-router-dom';

import fire from '../firebase';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moodValue: 50
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    fire.database().ref('moods').push( this.state.moodValue );
    this.state.moodValue = 50;
  }

  render() {
    return (
      <Link to="/tracker/input">How was your day?</Link>
      // <div className="tracker-wrapper">
      //   <div className="input-section">
      //     <div className="input-wrapper">
      //       <h3>Mood</h3>
      //       <form onSubmit={this.onSubmit}>
      //         <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
      //         <button type="submit">Save</button>
      //       </form>
      //     </div>
      //     <div className="input-wrapper">
      //       <h3>Anxiety</h3>
      //       <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
      //     </div>
      //     <div className="input-wrapper">
      //       <h3>Exercise</h3>
      //       <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
      //     </div>
      //     <div className="input-wrapper">
      //       <h3>Appetite</h3>
      //       <input type="range" value={this.state.value} onChange={event => { this.setState({ moodValue: event.target.value }) }} />
      //     </div>
      //   </div>
      //   <div className="graph-wrapper">
      //   </div>
      // </div>
    );
  }
}

export default Tracker;
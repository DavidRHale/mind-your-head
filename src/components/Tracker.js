import React from 'react';
import InputSlider from 'react-input-slider';
import { Link } from 'react-router-dom';
import { LineChart, Line } from 'recharts';

import fire from '../firebase';
import TrackerGraph from './TrackerGraph';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    fire.database().ref('trackerScores').orderByChild('date').once('value').then((snapshot) => {      
      const data = Object.values(snapshot.val());
      this.setState({ data });
    });
  }

  onSubmit(event) {
    event.preventDefault();

    fire.database().ref('moods').push( this.state.moodValue );
    this.state.moodValue = 50;
  }

  renderAdvicePanel() {
    if (this.state.advice) {
      return (
        <div>
          Advice is here for youuu
        </div>
      );
    } else {
      return (
        <div className="advice-panel">
          Enter your tracking stuff and we can give you some advice!
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <TrackerGraph 
          data={this.state.data}
        />
        <div className="card advice-input-wrapper">
          { this.renderAdvicePanel() }
          <Link to="/tracker/input" className="btn btn-primary">How was your day?</Link>
        </div>
      </div>
    );
  }
}

export default Tracker;
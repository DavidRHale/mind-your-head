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

  render() {
    console.log('state data', this.state.data)
    return (
      <div>
        <TrackerGraph 
          data={this.state.data}
        />
        <Link to="/tracker/input" className="btn btn-primary">How was your day?</Link>
      </div>
    );
  }
}

export default Tracker;
import React from 'react';
import InputSlider from 'react-input-slider';
import { Link } from 'react-router-dom';

import fire from '../firebase';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: {}
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    fire.database().ref('trackerScores').once('value').then((snapshot) => {
      this.setState({ scores: snapshot.val() });
    });
    console.log(this.state.scores);
  }

  onSubmit(event) {
    event.preventDefault();

    fire.database().ref('moods').push( this.state.moodValue );
    this.state.moodValue = 50;
  }

  render() {
    console.log(this.state.scores)
    return (
      <Link to="/tracker/input" className="btn btn-primary">How was your day?</Link>
    );
  }
}

export default Tracker;
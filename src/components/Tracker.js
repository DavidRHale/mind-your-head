import React from 'react';
import InputSlider from 'react-input-slider';
import { Link } from 'react-router-dom';
import { LineChart, Line } from 'recharts';
import moment from 'moment';

import fire from '../firebase';
import TrackerGraph from './TrackerGraph';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataEnteredToday: false,
      advice: '',
      scoresToday: {}
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.setDataEnteredToday = this.setDataEnteredToday.bind(this);
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

  parseExercise(value) {
    switch (value) {
      case 0:
        return 'Haven\'t done any';
        break;
      
      case 2: 
        return 'Mild exercise. Well done!';
        break;

      case 4:
        return 'Moderate exercise. That\'s awesome!'
        break;
      
      case 6:
        return 'Intense exercise. Amazing!'
        break;
    
      default:
        break;
    }
  }

  renderAdvicePanel() {
    if (this.state.dataEnteredToday) {
      return (
        <div className="card advice-input-wrapper">  
          <div className="advice-wrapper">
            <div className="advice-panel dark-blue-border">
              <h4>Mood: { this.state.scoresToday.mood }</h4>
              <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="advice-panel light-blue-border">
              <h4>Anxiety: { this.state.scoresToday.anxiety }</h4>            
              <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="advice-panel green-border">
              <h4>Sleep: { this.state.scoresToday.sleep }</h4>            
              <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="advice-panel rose-border">
              <h4>Social: { this.state.scoresToday.social }</h4>              
              <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="advice-panel yellow-border">
              <h4>Exercise: { this.state.scoresToday.exercise }</h4>            
              <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
          </div>      
        </div>
      );
    } else {
      return (
        <div className="card advice-input-wrapper">
          <div className="advice-panel">
            Enter your tracking stuff and we can give you some advice!
          </div>
          <Link to="/tracker/input" className="btn btn-primary input-start-button">How was your day?</Link>  
        </div>      
      );
    }
  }
  
  setDataEnteredToday(scoresToday) {
    if (!this.state.dataEnteredToday) {
      this.setState({ dataEnteredToday: true, scoresToday });    
    }
  }

  render() {
    return (
      <div className="tracker">
        <div className="tracker-header">
          <h1>Health Tracker</h1>
          <p>Keep an eye on your symptoms and see how they relate to each other find out the best way to look after your health.</p>
        </div>
        <TrackerGraph 
          data={this.state.data}
          dataEnteredToday={this.setDataEnteredToday}
        />
        { this.renderAdvicePanel() }
      </div>
    );
  }
}

export default Tracker;
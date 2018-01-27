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
      advice: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    // this.isDataEnteredToday = this.isDataEnteredToday.bind(this);
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

  renderAdvicePanel() {
    if (this.state.dataEnteredToday) {
      return (
        <div className="card advice-input-wrapper">        
          <div className="advice-panel">
            Advice is here for youuu
          </div>
        </div>
      );
    } else {
      return (
        <div className="card advice-input-wrapper">
          <div className="advice-panel">
            Enter your tracking stuff and we can give you some advice!
          </div>
          <Link to="/tracker/input" className="btn btn-primary">How was your day?</Link>  
        </div>      
      );
    }
  }
  
  setDataEnteredToday() {
    if (!this.state.dataEnteredToday) {
      this.setState({ dataEnteredToday: true });    
    }
  }

  // isDataEnteredToday() {    
  //   if (!this.state.dataEnteredToday) {
  //     const thisMidnight = moment( moment().format('YYYY-MM-DD') + ' 00:01:00' ).unix();
  //     const nextMidnight = moment( moment().format('YYYY-MM-DD') + ' 23:59:00' ).unix();

  //     this.state.data.forEach(entry => {
  //       if (entry.date > thisMidnight && entry.date < nextMidnight) {
  //         this.setState({ dataEnteredToday: true });
  //       }
  //     });
  //   }
  // }

  render() {
    return (
      <div>
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
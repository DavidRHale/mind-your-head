import React from 'react';
import { Redirect } from 'react-router-dom';
import TrackerSliderInput from './TrackerSliderInput';
import TrackerDropdownInput from './TrackerDropdownInput';
import fire from '../firebase';
import moment from 'moment';

class TrackerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 5,
      moodAdded: false,
      anxiety: 5,
      anxietyAdded: false,
      sleep: 5,
      sleepAdded: false,
      social: 5,
      socialAdded: false,
      exercise: 0,
      exerciseAdded: false
    } 

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput() {
    if (!this.state.moodAdded) {
      return (
        <TrackerSliderInput 
          title="Mood" 
          negativeIcon="/resources/sad.jpeg"
          positiveIcon="/resources/happy.jpeg"
          negativeLabel="Bad"
          positiveLabel="Good"
          value={this.state.mood}
          onChange={event => this.setState({ mood: Math.trunc(event.target.value) })}
          onClick={event => { 
            event.preventDefault();
            this.setState({ moodAdded: true });
          } }/>
      );
    }

    if (!this.state.anxietyAdded) {
      return (
        <TrackerSliderInput 
          title="Anxiety"
          negativeIcon="/resources/anxious.jpeg"
          positiveIcon="/resources/calm.jpeg"
          value={this.state.anxiety}
          onChange={event => this.setState({ anxiety: Math.trunc(event.target.value) })}
          onClick={event => { 
            event.preventDefault();
            this.setState({ anxietyAdded: true });
          } }/>
      );
    }

    if (!this.state.sleepAdded) {
      return (
        <TrackerSliderInput 
          title="Sleep" 
          negativeIcon="/resources/awake.jpeg"
          positiveIcon="/resources/sleeping.jpeg"
          value={this.state.sleep}
          onChange={event => this.setState({ sleep: Math.trunc(event.target.value) })}
          onClick={event => { 
            event.preventDefault();
            this.setState({ sleepAdded: true });
          } }/>
      );
    }

    if (!this.state.socialAdded) {
      return (
        <TrackerSliderInput 
          title="Social" 
          negativeIcon="/resources/unsociable.jpeg"
          positiveIcon="/resources/sociable.jpeg"
          value={this.state.social}
          onChange={event => this.setState({ social: Math.trunc(event.target.value) })}
          onClick={event => { 
            event.preventDefault();
            this.setState({ socialAdded: true });
          } }/>
      );
    }
    
    if (!this.state.exerciseAdded) {
      return (
        <TrackerDropdownInput 
          title="Exercise" 
          icon="/resources/exercise.jpeg"
          onChange={event => this.setState({ exercise: Math.trunc(event.target.value) })}
          onClick={event => { 
            event.preventDefault();
            this.setState({ exerciseAdded: true });

            const now = moment().unix();

            const scores = {
              mood: this.state.mood,
              anxiety: this.state.anxiety,
              sleep: this.state.sleep,
              social: this.state.social,
              exercise: this.state.exercise,
              date: now
            }
        
            fire.database().ref('trackerScores').push( scores );
          } }/>
      );
    }

    return <Redirect to="/tracker" />
  }
  
  render() {
    return (
      <div>
        { this.renderInput() }
      </div>
    );
  }
}

export default TrackerInput;
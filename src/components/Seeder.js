import React from 'react';
import fire from '../firebase';
import moment from 'moment';

class Seeder extends React.Component {
  seed() {

    const now = moment().unix();
    const yesterday = moment().subtract(1, 'days').unix();

    // 1000ms in 1s
    // 60s in 1min
    // 60mins in 1 hour
    // 24 hours in 1 day

    function daysAgo(daysAgo, now) {
      daysAgo = daysAgo * 24;
      daysAgo = daysAgo * 60;
      daysAgo = daysAgo * 60;
      daysAgo = daysAgo * 1000;
      return now - daysAgo;
    }

    const data = [
      {
        mood: 8,
        anxiety: 8,
        sleep: 8,
        social: 8,
        exercise: 2,
        date: moment().subtract(14, 'days').unix()
      },
      {
        mood: 8,
        anxiety: 8,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: moment().subtract(13, 'days').unix()
      },
      {
        mood: 7,
        anxiety: 7,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: moment().subtract(12, 'days').unix()
      },
      {
        mood: 6,
        anxiety: 7,
        sleep: 6,
        social: 6,
        exercise: 0,
        date: moment().subtract(11, 'days').unix()
      },
      {
        mood: 6,
        anxiety: 6,
        sleep: 5,
        social: 5,
        exercise: 0,
        date: moment().subtract(10, 'days').unix()
      },
      {
        mood: 5,
        anxiety: 4,
        sleep: 5,
        social: 6,
        exercise: 1,
        date: moment().subtract(9, 'days').unix()
      },
      {
        mood: 5,
        anxiety: 5,
        sleep: 6,
        social: 4,
        exercise: 0,
        date: moment().subtract(8, 'days').unix()
      },
      {
        mood: 8,
        anxiety: 8,
        sleep: 8,
        social: 8,
        exercise: 2,
        date: moment().subtract(7, 'days').unix()
      },
      {
        mood: 8,
        anxiety: 8,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: moment().subtract(6, 'days').unix()
      },
      {
        mood: 7,
        anxiety: 7,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: moment().subtract(5, 'days').unix()
      },
      {
        mood: 6,
        anxiety: 7,
        sleep: 6,
        social: 6,
        exercise: 0,
        date: moment().subtract(4, 'days').unix()
      },
      {
        mood: 6,
        anxiety: 6,
        sleep: 5,
        social: 5,
        exercise: 0,
        date: moment().subtract(3, 'days').unix()
      },
      {
        mood: 5,
        anxiety: 4,
        sleep: 5,
        social: 6,
        exercise: 1,
        date: moment().subtract(2, 'days').unix()
      },
      {
        mood: 5,
        anxiety: 5,
        sleep: 6,
        social: 4,
        exercise: 0,
        date: moment().subtract(1, 'days').unix()
      },
      {
        mood: 3,
        anxiety: 5,
        sleep: 3,
        social: 4,
        exercise: 0,
        date: now
      }
    ];

    data.forEach(entry => fire.database().ref('trackerScores').push( entry ));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.seed} className="btn btn-danger">Seed</button>
      </div>
    );
  }
}

export default Seeder;
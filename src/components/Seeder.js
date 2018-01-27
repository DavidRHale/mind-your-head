import React from 'react';
import fire from '../firebase';

class Seeder extends React.Component {
  seed() {
    const now = Date.now();

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
        date: now
      },
      {
        mood: 8,
        anxiety: 8,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: daysAgo(1, now)
      },
      {
        mood: 7,
        anxiety: 7,
        sleep: 6,
        social: 7,
        exercise: 0,
        date: daysAgo(2, now)
      },
      {
        mood: 6,
        anxiety: 7,
        sleep: 6,
        social: 6,
        exercise: 0,
        date: daysAgo(3, now)
      },
      {
        mood: 6,
        anxiety: 6,
        sleep: 5,
        social: 5,
        exercise: 0,
        date: daysAgo(4, now)
      },
      {
        mood: 5,
        anxiety: 4,
        sleep: 5,
        social: 6,
        exercise: 1,
        date: daysAgo(5, now)
      },
      {
        mood: 5,
        anxiety: 5,
        sleep: 6,
        social: 4,
        exercise: 0,
        date: daysAgo(6, now)
      },
      {
        mood: 3,
        anxiety: 5,
        sleep: 3,
        social: 4,
        exercise: 0,
        date: daysAgo(7, now)
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
import React from 'react';
import fire from '../firebase';
import moment from 'moment';

class Seeder extends React.Component {
  seedHealthData() {

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
        exercise: 4,
        date: moment().subtract(9, 'days').unix()
      },
      {
        mood: 5,
        anxiety: 5,
        sleep: 6,
        social: 4,
        exercise: 6,
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

  seedResources() {
    const resources = [
      {
        imageUrl: 'https://www.nightline.ac.uk/wp-content/uploads/2014/04/NLAHomeButtonLogo-270x250.png',
        title: 'Nightline',
        description: 'Nightline provides various confidential and anonymous overnight listening, emotional support, information, and supplies services, run by students for students at universities around the world.',
        upVotes: 0,
        downVotes: 0
      }
    ];

    resources.forEach(entry => fire.database().ref('infoResources').push( entry ));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.seedHealthData} className="btn btn-danger seed-button">Seed Health Data</button>
        <button onClick={this.seedResources} className="btn btn-danger seed-button">Seed Resources</button>
      </div>
    );
  }
}

export default Seeder;
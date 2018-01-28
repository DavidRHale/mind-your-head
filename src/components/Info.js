import React from 'react';

import fire from '../firebase';
import InfoCard from './InfoCard';

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoResources: []
    }
  }

  componentDidMount() {
    fire.database().ref('infoResources').once('value').then((snapshot) => {
      const infoResources = Object.values(snapshot.val());      
      this.setState({ infoResources });
    });    
  }

  renderInfoCards() {
    if (this.state.infoResources.length > 0) {
      return this.state.infoResources.map(resource => {
        return (
          <InfoCard 
            key={ resource.name }
            imageUrl={ resource.imageUrl }
            title={ resource.title }
            description={ resource.description }
            upVotes={ resource.upVotes }
            downVotes={ resource.downVotes }
          />
        );
      });
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }

  render() {
    return (
      <div className="tracker">
        <div className="tracker-header">
          <h1>Information</h1>
          <p>Find all the best info and stuff to do.</p>
        </div>
        <ul className="infocard-list">
          { this.renderInfoCards() }
        </ul>
      </div>
    );
  }
}

export default Info;
import React from 'react';

import fire from '../firebase';
import InfoCard from './InfoCard';

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoResources: {}
    }

    this.onUpClick = this.onUpClick.bind(this);
  }

  componentDidMount() {
    fire.database().ref('infoResources').once('value').then((snapshot) => {
      // const infoResources = Object.values(snapshot.val());      
      this.setState({ infoResources: snapshot.val() });
    });    
  }

  onUpClick(event) {
    event.preventDefault();

    console.log(event.target.value);
  }

  renderInfoCards() {
    if (Object.keys(this.state.infoResources).length > 0) {
      return Object.keys(this.state.infoResources).map(key => {
        const resource = this.state.infoResources[key];
        return (
          <InfoCard 
            key={ resource.name }
            imageUrl={ resource.imageUrl }
            title={ resource.title }
            description={ resource.description }
            upVotes={ resource.upVotes }
            downVotes={ resource.downVotes }
            onUpClick={ (event) => {
              fire.database().ref('infoResources/' + key).set({
                imageUrl: resource.imageUrl,
                title: resource.title,
                description: resource.description,
                upVotes: resource.upVotes + 1,
                downVotes: resource.downVotes
              });
              const infoResources = this.state.infoResources;
              infoResources[key].upVotes++;
              this.setState({ infoResources });              
            } }
            onDownClick={ (event) => {
              fire.database().ref('infoResources/' + key).set({
                imageUrl: resource.imageUrl,
                title: resource.title,
                description: resource.description,
                upVotes: resource.upVotes,
                downVotes: resource.downVotes + 1
              });
              const infoResources = this.state.infoResources;
              infoResources[key].downVotes++;
              this.setState({ infoResources });              
            }  }
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
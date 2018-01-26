import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col justify-content-md-center text-center">
          <h1 className="main-header">Mind Your Head</h1>
          <div className="row">
            <button className="col btn btn-primary get-started-button">Self-Care Pathway</button>
            <button className="col btn btn-primary get-started-button">Health Behaviour Tracker</button>
            <button className="col btn btn-primary get-started-button">Information And Resources</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
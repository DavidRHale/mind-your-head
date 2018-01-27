import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col justify-content-md-center text-center">
          <h1 className="main-header">Mind Your Head</h1>
          <div className="row button-wrapper">
            <Link to="/tracker" className="col btn btn-primary get-started-button">Health Behaviour</Link>
            <Link to="/" className="col btn btn-primary get-started-button">Information And Resources</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
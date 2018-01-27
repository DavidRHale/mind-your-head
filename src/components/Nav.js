import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default () => {
  return (
    <div className="navbar navbar-toggleable-md navbar-inverse bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="navbar-brand">Mind Your Head</Link>      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/tracker" className="nav-link">Tracker</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tracker" className="nav-link">Information</NavLink>          
          </li>
        </ul>
      </div>
    </div>
  );
}

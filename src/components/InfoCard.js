import React from 'react';

class InfoCard extends React.Component {
  render() {
    return (
      <div key={ this.props.key } className="card infocard">
        <img 
          src={ this.props.imageUrl } 
          alt=""
        />
        <div className="text-content">
          <h3>{ this.props.title }</h3>
          <p>{ this.props.description }</p>
        </div>
        <div className="vote-container">
          <div className="vote-button-wrapper">
            <button className="btn btn-primary vote-button" onClick={ this.props.onUpClick }>
              <span className="fa fa-thumbs-o-up"></span>
            </button>
            <p>{ this.props.upVotes }</p>
          </div>
          <div className="vote-button-wrapper">
            <button className="btn btn-primary vote-button" onClick={ this.props.onDownClick }><span className="fa fa-thumbs-o-down"></span></button>
            <p>{ this.props.downVotes }</p>          
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCard;
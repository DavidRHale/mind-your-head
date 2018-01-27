import React from 'react';
import { LineChart, Line } from 'recharts';

class TrackerGraph extends React.Component {
  render() {
    return (
      <div>
        { console.log('data', this.props.data) }
        <LineChart width={400} height={400} data={this.props.data}>
          <Line type="monotone" dataKey="mood" stroke="#fff" />
          <Line type="monotone" dataKey="social" stroke="#fff" />
        </LineChart>
        {/* <LineChart></LineChart> */}
      </div>
    );
  }
}

export default TrackerGraph;
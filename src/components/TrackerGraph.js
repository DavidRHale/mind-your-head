import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis } from 'recharts';

class TrackerGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysLimiter: 7
    };

    this.onTimePeriodChange = this.onTimePeriodChange.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  onTimePeriodChange(event) {
    this.setState({ daysLimiter: event.target.value });
  }

  millisToDays(millis) {
    const seconds = millis / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    return hours / 24;
  }

  filterData() {
    const filtered = [];

    if (this.props.data) {
      this.props.data.forEach(entry => {
        const now = Date.now();
        const diff = now - entry.date;
        if (this.millisToDays(diff) < this.state.daysLimiter) {
          filtered.push(entry);
        } 
      });
    }

    return filtered;
  }

  render() {
    return (
      <div className="tracker-graph-wrapper">
        <ComposedChart width={400} height={400} data={ this.filterData() } className="tracker-graph">
          <Line type="monotone" dataKey="mood" stroke="#fff" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="social" stroke="green" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="sleep" stroke="red" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="anxiety" stroke="yellow" strokeWidth={3} dot={false}/>
          <Bar dataKey="exercise" barSize={20} fill="#413ea0" />
          <XAxis />
          <YAxis type="number" domain={[0, 10]} />
        </ComposedChart>
        <select onChange={ this.onTimePeriodChange }>
          <option value={3}>1 Week</option>
          <option value={7}>2 Weeks</option>
          <option value={30}>1 Month</option>
          <option value={90}>3 Months</option>
        </select>
      </div>
    );
  }
}

export default TrackerGraph;
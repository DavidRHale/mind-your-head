import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis } from 'recharts';
import moment from 'moment';

class TrackerGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysLimiter: 7,
      currentData: []
    };

    this.onTimePeriodChange = this.onTimePeriodChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.formatXAxis = this.formatXAxis.bind(this);
  }

  componentDidMount() {
    this.filterData(7);    
  }

  onTimePeriodChange(event) {
    this.setState({ daysLimiter: event.target.value });
  }

  filterData(days) {
    const filtered = [];

    if (this.props.data) {
      this.props.data.forEach(entry => {
        const now = moment();
        if(now - moment(entry.date) < moment().subtract(days, 'days')) {
          filtered.push(entry);
        }
      });
    }
    return filtered;
  }

  formatXAxis(tickItem) {
    console.log(tickItem);
    const data = this.filterData();
    const element = data[tickItem]
    return moment(element.date).format('Do MMM ha');
  }

  render() {
    return (
      <div className="tracker-graph-wrapper">
        <ComposedChart width={400} height={400} data={ this.filterData(this.state.daysLimiter) } className="tracker-graph">
          <Line type="monotone" dataKey="mood" stroke="#fff" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="social" stroke="green" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="sleep" stroke="red" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="anxiety" stroke="yellow" strokeWidth={3} dot={false}/>
          <Bar dataKey="exercise" barSize={20} fill="#413ea0" />
          <XAxis tickFormatter={ this.formatXAxis }/>
          {/* <YAxis type="number" domain={[0, 10]} /> */}
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
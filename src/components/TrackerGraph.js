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
    this.renderGraph = this.renderGraph.bind(this);
    this.calculateXDomain = this.calculateXDomain.bind(this);
  }

  componentDidMount() {
    this.filterData(7);    
  }

  onTimePeriodChange(event) {
    this.filterData(event.target.value);    
    this.setState({ daysLimiter: event.target.value });
  }

  filterData(days) {
    const filtered = [];

    console.log(days);

    if (this.props.data) {
      this.props.data.forEach(entry => {
        const now = moment();
        if(moment(entry.date) > moment().subtract(days, 'days')) {
          filtered.push(entry);
        }
      });
    }
    return filtered;
  }

  formatXAxis(tickItem) {
    console.log(tickItem);
    if (this.state.currentData.length > 0) {
      const data = this.state.currentData;
      console.log('data', data)
      const element = data[tickItem]
      return moment(element.date).fromNow();
    }
    return '';
  }

  calculateXDomain() {
    return [0, this.state.daysLimiter];
  }

  renderGraph() {
    console.log('pre-render', this.props.data)
    if (this.props.data.length > 0) {

      const filtered = this.filterData(this.state.daysLimiter);

      return (
        <div className="tracker-graph-wrapper">
          <ComposedChart width={400} height={400} data={ filtered } className="tracker-graph">
            <Line type="monotone" dataKey="mood" stroke="#fff" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="social" stroke="green" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="sleep" stroke="red" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="anxiety" stroke="yellow" strokeWidth={3} dot={false}/>
            <Bar dataKey="exercise" barSize={20} fill="#413ea0" />
            {/* <XAxis type="category" domain={ [0, this.state.daysLimiter] } tickFormatter={ this.formatXAxis } tickCount={ this.state.currentData.length }/> */}
            {/* <YAxis type="number" domain={[0, 10]} /> */}
          </ComposedChart>
        </div>
      );
    }

    return <div>'Loading'</div>;
  }

  render() {
    return (
      <div>
        { this.renderGraph() }
        <select onChange={ this.onTimePeriodChange }>
          <option value={7}>1 Week</option>
          <option value={14}>2 Weeks</option>
          <option value={30}>1 Month</option>
          <option value={90}>3 Months</option>
        </select>
      </div>
    );
  }
}

export default TrackerGraph;
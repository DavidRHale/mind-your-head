import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import moment from 'moment';

class TrackerGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysLimiter: 7,
      currentData: [],
      showMood: true,
      showAnxiety: true,
      showSleep: true,
      showSocial: true,
      showExercise: true,
      width: 0,
      height: 0
    };

    this.onTimePeriodChange = this.onTimePeriodChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.formatXAxis = this.formatXAxis.bind(this);
    this.renderGraph = this.renderGraph.bind(this);
    this.axisDomain = this.axisDomain.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.calculateWidth = this.calculateWidth.bind(this);
    this.calculateHeight = this.calculateHeight.bind(this);
  }

  componentDidMount() {
    this.filterData(7);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onTimePeriodChange(event) {
    this.filterData(event.target.value);    
    this.setState({ daysLimiter: event.target.value });
  }

  filterData(days) {
    const filtered = [];

    if (this.props.data.length > 0) {
      console.log('data',this.props.data);
      this.props.data.forEach(entry => {
        console.log('entry', )
        if(moment.unix(entry.date) > moment().subtract(days, 'days')) {
          filtered.push(entry);
        }
      });
    }
    return filtered;
  }

  formatXAxis(tickItem) {
    return moment.unix(tickItem).format('DD/MM');
  }

  axisDomain() {
    const min = moment().subtract(this.state.daysLimiter, 'days').unix();
    const max = moment().unix();
    return [min , max + 10000];
  }

  calculateHeight() {
    if (this.state.width < 800) {
      return 200;
    }
    return 400;
  }

  calculateWidth() {
    if (this.state.width < 800) {
      return 200;
    }
    return 800;
  }

  renderGraph() {
    if (this.props.data.length > 0) {

      const filtered = this.filterData(this.state.daysLimiter);
      return (
        <div className="card align-items-right tracker-graph-wrapper">
            <ComposedChart height={this.calculateHeight()} width={this.calculateWidth()} data={ filtered } className="tracker-graph" isAnimationActive={false}>
              { this.state.showMood ? <Line type="monotone" dataKey="mood" stroke="blue" strokeWidth={3} dot={false}/> : '' }
              { this.state.showSocial ? <Line type="monotone" dataKey="social" stroke="green" strokeWidth={3} dot={false}/> : '' }
              { this.state.showSleep ? <Line type="monotone" dataKey="sleep" stroke="red" strokeWidth={3} dot={false}/> : '' }
              { this.state.showAnxiety ? <Line type="monotone" dataKey="anxiety" stroke="yellow" strokeWidth={3} dot={false}/> : '' }
              { this.state.showExercise ? <Bar dataKey="exercise" barSize={20} fill="#413ea0" /> : '' }
              <XAxis type="number" dataKey="date" tickFormatter={ this.formatXAxis } domain={ this.axisDomain() }/>
              <YAxis type="number" domain={[0, 10]} padding={{ left: 0 }} />
            </ComposedChart>
        </div>
      );
    }

    return <div>'Loading'</div>;
  }

  render() {
    console.log(this.state.showMood);
    return (
      <div>
        { this.renderGraph() }
        <div className="card graph-options-wrapper">
          <select className="graph-options-select" onChange={ this.onTimePeriodChange }>
            <option value={7}>1 Week</option>
            <option value={14}>2 Weeks</option>
            <option value={30}>1 Month</option>
            <option value={90}>3 Months</option>
          </select>
          <form>
            <label className="graph-checkbox" htmlFor="showMood">Mood
            <input 
              type="checkbox" 
              checked={ this.state.showMood } 
              name="showMood" 
              id="showMood"
              onChange={ () => this.setState({ showMood: !this.state.showMood }) }
            /></label>
            <label htmlFor="showAnxiety">Anxiety
            <input 
              type="checkbox" 
              checked={ this.state.showAnxiety } 
              name="showAnxiety" 
              id="showAnxiety"
              onChange={ () => this.setState({ showAnxiety: !this.state.showAnxiety }) }
            /></label>
            <label htmlFor="showSleep">Sleep
            <input 
              type="checkbox" 
              checked={ this.state.showSleep } 
              name="showSleep" 
              id="showSleep"
              onChange={ () => this.setState({ showSleep: !this.state.showSleep }) }
            /></label>
            <label htmlFor="showSocial">Social
            <input 
              type="checkbox" 
              checked={ this.state.showSocial } 
              name="showSocial" 
              id="showSocial"
              onChange={ () => this.setState({ showSocial: !this.state.showSocial }) }
            /></label>
            <label htmlFor="showExercise">Exercise
            <input 
              type="checkbox" 
              checked={ this.state.showExercise } 
              name="showExercise" 
              id="showExercise"
              onChange={ () => this.setState({ showExercise: !this.state.showExercise }) }
            /></label>
          </form>
        </div>
      </div>
    );
  }
}

export default TrackerGraph;
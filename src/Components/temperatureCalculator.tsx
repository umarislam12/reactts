import React from 'react'
export const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  g:"galvano"
};

class TemperatureInput extends React.Component<{scale:"c"|"f"|"g"},{temperature:string}> {
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e:any) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        <TemperatureInput scale="g" />
      </div>
    );
  }
}
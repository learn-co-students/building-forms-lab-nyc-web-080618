// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state={name:''}

  handleChange=(event) =>{
    this.setState({name: event.target.value});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    this.props.add_band(this.state.name)
    this.setState({name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BandInput

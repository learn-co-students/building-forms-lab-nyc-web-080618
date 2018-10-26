// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.name)
    event.target.reset()
  }


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <label>Add Band</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
          <input type="submit" />
       </form>
    )
  }
}

export default BandInput

import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  handleSubmit = (name) => {
    this.props.dispatch({ type: 'ADD_BAND', payload: {name: name} })
  }

  render() {
    // console.log(this.props.bands);
    return(
      <div>
        <BandInput handleSubmit={this.handleSubmit} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)

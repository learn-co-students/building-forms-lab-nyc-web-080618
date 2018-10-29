import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
// import Band from '../components/Band';

class BandsContainer extends Component {

  render() {
    console.log("hi");
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand(name){
      const action = {
        type: "ADD_BAND",
        name
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Band from '../components/Band'
class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput add_band={this.props.add_band}/>
        {this.props.bands.map(band=><Band name={band.name}/>)}
      </div>
    )
  }
}

const add_band=(band_name)=>{
  return {
    type:"ADD_BAND",
    band_name
  }
}

export default connect(state=>({bands:state.bands}),{add_band})(BandsContainer)

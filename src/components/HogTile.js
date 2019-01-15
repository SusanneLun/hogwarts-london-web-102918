import React, { Component } from 'react';



class HogTile extends Component {
  constructor() {
    super()
      this.state = {
        showDetail: false,
        showHog: true,
        hideHog: false
      }
  }



getImages(name) {
  return (process.env.PUBLIC_URL + "/hog-imgs/" + name.replace(' ','_').toLowerCase() + ".jpg")
}

setDetail = (e) => {

  this.setState({
    showDetail: !this.state.showDetail,
  });
    console.log('clicked')
}

// hiddenHog = (e) => {
//   console.log('clocked')
//   this.setState({
//     hideHog: true
//   })
// }




render() {
  return (
    <div value="name" style={{display: this.state.hiddenHog}}>
      <h2 onClick={this.setDetail}> {this.props.hog.name} </h2>
      <img src={this.getImages(this.props.hog.name)} onClick={this.setDetail} />
      <button onClick={() => this.props.handleClick(this.props.hog)}> {this.props.buttonName} </button>
      <div style={{display: this.state.showDetail ? 'block' : 'none'}}>
        <h3> Specialty: {this.props.hog.specialty} </h3>
        <h3> Greased: {this.props.hog.greased === true ? "Yes" : "No" } </h3>
        <h3> Weigth: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </h3>
        <h3> Highest Medal Achieved: {this.props.hog['highest medal achieved']} </h3>
      </div>
    </div>
  )
}
}




export default HogTile;

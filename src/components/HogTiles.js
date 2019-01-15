import React, { Component } from 'react';
import HogTile from './HogTile';
// import FilterButtons from './FilterButtons';

class HogTiles extends Component {
  constructor(props) {
    super()
    this.state = {
      hogs: props.hogs,
      hiddenHogs: []
    }
  }

sortFunction = (e) => {
  let sortKey = e.target.value;
  let sortedHogs = [...this.state.hogs];

  if (sortKey === "greased") {
    sortedHogs = sortedHogs.filter( hog => hog.greased === true)
  } else {
    sortedHogs.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return 1;
      if (a[sortKey] < b[sortKey]) return -1;
      return 0;
    })
  }
  this.setState({
    hogs: sortedHogs
  })
}

addAHiddenHog = (hog) => {
  if (!this.state.hiddenHogs.includes(hog)) {
this.setState({
  hiddenHogs: [...this.state.hiddenHogs, hog]
})
}
}


removeAHiddenHog = (hog) => {
this.setState({
  hiddenHogs: this.state.hiddenHogs.filter(h => h != hog)
})
}


render() {
  return (

  <div>
    <div>
      <button value="name" onClick={this.sortFunction}> Sort By Name </button>
      <button
        value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        onClick={this.sortFunction}> Sort By Weight </button>
      <button value="greased" onClick={this.sortFunction}> Show Greased Hogs </button>
    </div>
    <div className='hog-tiles'>
      {this.state.hogs.map(hog => <HogTile key={hog.name} hog={hog} handleClick={this.addAHiddenHog} buttonName="Hide Hog"/>)}
      <h3> Hidden Hogs </h3>
      {this.state.hiddenHogs.map(hog => <HogTile hog={hog} handleClick={this.removeAHiddenHog} buttonName="Show Hog"/>)}
    </div>
  </div>
  )
}
}

export default HogTiles;

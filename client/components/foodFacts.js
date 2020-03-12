import React from 'react'

export default class FoodFacts extends React.Component {
  render() {
    console.log('!', this.props.name)
    return (
      <div>
        <h1>Name = {this.props.name}</h1>
        <p>Description >>>> {this.props.food}</p>
      </div>
    )
  }
}

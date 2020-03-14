import React from 'react'
import styled from 'styled-components'

export default class FoodFacts extends React.Component {
  render() {
    console.log('!!', this.props)
    if (this.props.stores.length === 0) {
      return <h3 text-align="center">Please wait</h3>
    }
    return (
      <Wrapper>
        <h1>{this.props.name}</h1>
        <p>{this.props.food}</p>
        <div>
          <p>RESTAURANTS</p>
          {this.props.stores.map(store => (
            <p>
              <a href={store.url}>{store.name}</a>
            </p>
          ))}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 1em;
  color: #70dbb8;
`

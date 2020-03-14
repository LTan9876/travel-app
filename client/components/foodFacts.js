import React from 'react'
import styled from 'styled-components'

export default class FoodFacts extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.name}</h1>
        <p>{this.props.food}</p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 1em;
  color: #70dbb8;
`

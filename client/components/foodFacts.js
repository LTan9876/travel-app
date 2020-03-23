import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export default class FoodFacts extends React.Component {
  render() {
    if (this.props.stores.length === 0) {
      return (
        <Center>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </Center>
      )
    }
    return (
      <Wrapper>
        <h1>{this.props.name}</h1>
        <p>{this.props.food}</p>
        <div>
          <Rainbow>🔥 You Could Be Eating Here 🔥</Rainbow>
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
const Rainbow = styled.h2`
  background-image: linear-gradient(to left, red, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Center = styled.div`
  text-align: center;
`

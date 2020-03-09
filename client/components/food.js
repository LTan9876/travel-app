import React from 'react'
import styled from 'styled-components'

export default class Food extends React.Component {
  constructor() {
    super()
    this.state = {
      food: ''
    }
  }

  updateFood = value => {
    this.setState({food: value})
  }

  render() {
    console.log('from food page', this)
    return (
      <div>
        <Wrapper>
          <Onion onClick={() => this.updateFood('onion')} />
          <Tacos onClick={() => this.updateFood('taco')} />
          <Salsa onClick={() => this.updateFood('salsa')} />
          <Guac onClick={() => this.updateFood('guac')} />
        </Wrapper>
        <p>INSERT Ternary COMPONENT HERE</p>
      </div>
    )
  }
}

const Tacos = styled.div`
  position: relative;
  top: 40px;
  left: 60px;
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 7px;
  border-radius: 50%;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Guac = styled.div`
  position: relative;
  bottom: 100px;
  left: 1050px;
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 7px;
  border-radius: 50%;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Salsa = styled.div`
  position: relative;
  bottom: 150px;
  left: 270px;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 7px;
  border-radius: 50%;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Onion = styled.div`
  position: relative;
  top: 200px;
  left: 615px;
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 7px;
  border-radius: 50%;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  margin-top: 10px;
  height: 100vh;
  width: 100vw;
  backgroundsize: 'cover';
  background-image: url(https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/07/1/0/CI_Daniel-Klinckwort-Ana-Laframboise-El-Tizoncito.jpg.rend.hgtvcom.1280.853.suffix/1491593017762.jpeg);
  background-repeat: no-repeat;
`

const Div = styled.div`
  text-align: center;
`

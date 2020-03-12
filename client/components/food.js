import React from 'react'
import styled from 'styled-components'
import FoodFacts from './foodFacts'
import Axios from 'axios'

export default class Food extends React.Component {
  constructor() {
    super()
    this.state = {
      food: '',
      clicked: false,
      info: []
    }
    this.getInfo = this.getInfo.bind(this)
  }

  updateFood = foodName => {
    this.setState({
      food: foodName,
      clicked: true
    })
    this.getInfo(foodName)
  }

  async getInfo(foodName) {
    let {data} = await Axios.get(`/api/food/${foodName}`)
    this.setState({
      info: data.description
    })
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Fried onClick={() => this.updateFood('Bistek')} />
          <Tacos onClick={() => this.updateFood('Taco')} />
          <Salsa onClick={() => this.updateFood('Salsa')} />
          <Guacamole onClick={() => this.updateFood('Guacamole')} />
        </Wrapper>
        {this.state.clicked ? (
          <FoodFacts food={this.state.info} name={this.state.food} />
        ) : (
          <div />
        )}
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
const Guacamole = styled.div`
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

const Fried = styled.div`
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

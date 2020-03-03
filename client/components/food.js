import React from 'react'
import styled from 'styled-components'

export default class Food extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>PLACEHOLDER FOR FOOD</Title>
      </Wrapper>
    )
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  backgroundsize: 'cover';
  background-image: url(https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/07/1/0/CI_Daniel-Klinckwort-Ana-Laframboise-El-Tizoncito.jpg.rend.hgtvcom.1280.853.suffix/1491593017762.jpeg);
  background-repeat: no-repeat;
`

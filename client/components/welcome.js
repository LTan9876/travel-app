import React from 'react'
import styled from 'styled-components'

export default class Welcome extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title
          onClick={() =>
            alert('sneak attack - populate with updated flight info')
          }
        >
          ✨MEXICO CITY✨
        </Title>
      </Wrapper>
    )
  }
}

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  height: 130vh;
  width: 100vw;
  backgroundsize: 'contain';
  background-image: url(https://travel.home.sndimg.com/content/dam/images/travel/stock/2018/2/16/iStock_Zocalo-Square_Mexico-City_622286316_xl.jpg.rend.hgtvcom.1280.853.suffix/1518794349078.jpeg);
  background-repeat: no-repeat;
`

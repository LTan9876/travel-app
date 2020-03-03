import React from 'react'
import {Navbar, Welcome, Food} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Food />
    </div>
  )
}

export default App

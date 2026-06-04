import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Things to do at the gym</h1>
      <h2>Welcome to Chicago!</h2>
      <Calendar />
    </div>
  )
}

export default App
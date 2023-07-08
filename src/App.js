import React from 'react'
import {Navbar,Header,Contact,Footer,Projects,About} from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/><Header/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

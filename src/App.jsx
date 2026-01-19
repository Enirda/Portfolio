import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      
      <div id="about">
        <Hero />
      </div>
      
      <div id="resume" className="container light-section" style={{padding: '100px 40px',
                                                                  backgroundColor: '#F6F1E3',
                                                                  width: '100%',
                                                                  color: 'black'}}>
      </div>
      
    <Footer /> 
    </div>

    
  )
}

export default App
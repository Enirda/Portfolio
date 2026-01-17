import React from 'react'
import Navbar from './components/Navbar' 
import Hero from './components/Hero' 

function App() {
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <main style={{ padding: "20px" }}>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Ceci est le contenu principal de ma page.</p>
      </main>
    </div>
  )
}

export default App
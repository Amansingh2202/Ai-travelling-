import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router-dom'

function App() {
           return (
            <Router>
              <div>
                <switch>
                  <route path="/" exact component={home}/>
                  <route path="/profile" component={profile}/>
                </switch>
              </div>
            </Router>
           )

  return 
}

export default App

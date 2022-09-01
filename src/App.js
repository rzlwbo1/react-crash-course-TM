import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './style.css'


function App() {
  return (
    <div className='container'>
      <Header />
      <Tasks />
    </div>
  )
}

export default App
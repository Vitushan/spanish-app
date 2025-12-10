import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
// Un composant React = une fonction
  return (
    <>
      <Header /> {/* utilisation du composant Header */}
      <h1 className='text-3xl font-bold text-red-500'>My Learning Spanish App</h1>
    </>
  )
}

export default App

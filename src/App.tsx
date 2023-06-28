import Router from '@/route/index'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  )
}

export default App

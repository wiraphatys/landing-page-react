import { useState } from 'react'
import './App.css'
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import Services from './components/Services';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <MyNavbar />
      <MyHeader />
      <Services />
      <About />
    </div>
  )
}

export default App

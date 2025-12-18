  import { useState } from 'react'

  import './App.css'
  import Navbar from './Components/Navbar'
  import Manager from './Components/Manager'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <div>
        <video className='-z-10  fixed object-cover h-screen w-screen inset-0' autoPlay loop  muted src='/bg-video.mp4'>
          
        </video>
      
      <Navbar/>
      <Manager/>
      </div>
    )
  }

  export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { AllRoutes } from './Allfile/allroutes'
import { BackgroundAnimated } from './Allfile/background'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AllRoutes/>
      <BackgroundAnimated/>
    </div>
  )
}

export default App

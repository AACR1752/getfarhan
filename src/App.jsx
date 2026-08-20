import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import waterloo from './assets/waterloo.jpg'
import farhanloo from './assets/farhanloo.png'
import './App.css'

function App() {
  const [logo, setLogo] = useState(waterloo)

  return (
    <>
      <section id="center">
        <div className="hero">
          <div className="waterloo-container">
            <img src={logo} className="waterloo" alt="Waterloo logo" />
          </div>
        </div>

        <button
          type="button"
          className="switch-logo"
          onClick={() => setLogo(farhanloo)}
        >
          Try this guy!!
        </button>
      </section>

      <div className="ticks"></div>

      <section id="debtor">

        

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

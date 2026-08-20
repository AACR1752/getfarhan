import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import waterloo from './assets/waterloo.jpg'
import farhanloo from './assets/farhanloo.png'
import rope from './assets/rope.svg'

import sound from './assets/sadtrombone.swf.mp3'

import './App.css'

function App() {

  const updates = [
    "Sunith forgave his debt",
    "Farhan Paid $33 to Akib through utility",
    "Farhan is really sorry for his actions and is trying to make amends" 
  ]

  const ac_re = [33]
  const hk_re = []
  const sfa_re = [11.25]

  const ac = [30.24, 57]
  const hk = [38.75]
  const sfa = [11.25]

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
          onClick={() => {
            setLogo(farhanloo)
            new Audio(sound).play()
          }}
        >
          <img src={rope} alt="" aria-hidden="true" />
          Hang this guy!!
        </button>
      </section>

      <div className="ticks"></div>

      <section id="debtor">

        <p> 
          Farhan owes $ {
            (
              ac.reduce((a, b) => a + b, 0) + 
              hk.reduce((a, b) => a + b, 0) + 
              sfa.reduce((a, b) => a + b, 0)
            ).toFixed(2)
          } to the following creditors: 

        </p>

        <div className="creditor-box">
          <p>Hridita is owed $ {(hk.reduce((a, b) => a + b, 0) - hk_re.reduce((a, b) => a + b, 0)).toFixed(2)}</p>
          <p>Sunith is owed $ {(sfa.reduce((a, b) => a + b, 0) - sfa_re.reduce((a, b) => a + b, 0)).toFixed(2)}</p>
          <p>Akib is owed $ {(ac.reduce((a, b) => a + b, 0) - ac_re.reduce((a, b) => a + b, 0)).toFixed(2)}</p>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="bulletin">

        <h3 className="bulletin-heading">
          <span className="bulletin-badge">Breaking</span>
          Recent Events
        </h3>

        <ul className="bulletin-list">
          {[...updates].reverse().map((update, index) => (
            <li key={index} className="bulletin-item">{update}</li>
          ))}
        </ul>

      </section>
    </>
  )
}

export default App

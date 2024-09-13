import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container header_container">
          <img src="../public/logo.png" alt="" />
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
          <div className="chat">
            <img src="../public/chat.png" alt="" />
            <div className="text">
              <span>Need help?</span>
              <p>(307) 555-0133</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container main_container">
          <h1>Journey with Confidence <span>Migrate</span> with Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <button>Learn More <img src="../public/icon.png" alt="" /></button>
        </div>
      </main>
      <section>
        <div className="container section_container">
          <div className="block">
            <div className="boxs">
              <div className="box-one"></div>
              <div className="box-two"></div>
              <div className="box-three">
                <div className="box-10k">
                  <h1>10+</h1>
                  <p>years of experiences</p>
                </div>
              </div>
            </div>
            <div className="texts">
              <span>ABOUT US</span>
              <h1>Unknown Wanderlust Your Journey into</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
              <div className="checkeds">
                <div className="check">
                  <input type="checkbox" name="" id="" />
                  <h6>Safety Guides</h6>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                </div>
                <div className="check">
                  <input type="checkbox" name="" id="" />
                  <h6>Passport Assistance</h6>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                </div>
              </div>
              <button>
              Read More <img src="../public/icon.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="advanture">
        <div className="container advanture_container">
          <div className="advanture-top">
            <div className="top-text">
              <span>Our Services <img src="../public/object.png" alt="" /></span>
              <h1>Adventure  Unleashed Discover Your Next </h1>
            </div>
            <div className="next">
              <div className="next-arr"><img src="../public/arrow-left.png" alt="" /></div>
              <div className="next-arr"><img src="../public/arrow-right.png" alt="" /></div>
            </div>
          </div>
          <div className="advanture-midle">
             <div className="theme">
              <div className="img">
                <img src="../public/the1.png" alt="" />
              </div>
              <h3>Food and Wine Tours</h3>
              <p>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
             </div>
             <div className="theme">
              <div className="img">
                <img src="../public/the2.png" alt="" />
              </div>
              <h3>Travel Opportunities</h3>
              <p>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
             </div>
             <div className="theme">
              <div className="img">
                <img src="../public/the3.png" alt="" />
              </div>
              <h3>Solo Travel Planning</h3>
              <p>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

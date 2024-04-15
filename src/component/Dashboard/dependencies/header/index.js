import React from 'react'
import "../../index.css"
import headerImage from "../../../../assest/react-core-concepts.png"
import { CORE_CONCEPTS } from '../util';
import InteractiveTabs from '../InterractiveTabs';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


const Header = () => {
  return (
    <>
      <div>
        <header>
          <img src={headerImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>

        <main>
          <section id='core-concepts'>
            <h2>Core Concept</h2>
            <ul>
              {CORE_CONCEPTS.map((item) => {
                return (
                  <>
                    <li>
                      <img src={item.image} alt='No-img' />
                      <h3 >{item.title}</h3>
                      <p >{item.description}</p>
                    </li>
                  </>
                )
              })}
            </ul>
          </section>
          <section id='examples'>
            <h2>Examples</h2>
            <InteractiveTabs />
          </section>
        </main>
      </div>
    </>
  )
}

export default Header
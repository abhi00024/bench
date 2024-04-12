import React from 'react'
import "../../index.css"

import headerImage from "../../../../assest/react-core-concepts.png"


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


const Header = () =>{
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
          <h2>Time to get started!</h2>
        </main>
      </div>
        </>
    )
}

export default Header
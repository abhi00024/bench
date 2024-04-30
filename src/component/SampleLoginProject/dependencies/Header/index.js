import React from 'react'
import logo from "../../../../assest/logo.png"

const Header = () => {
    return (
        <>
        <div className='header'>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </div>
        </>
    )
}

export default Header

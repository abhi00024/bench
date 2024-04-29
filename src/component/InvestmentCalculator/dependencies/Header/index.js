import React from 'react'
import InvestmentCalculatorImg from '../../../../assest/investment-calculator-logo.png'

const Header = () => {
  return (
    <>
    <div id="header">
      <img src={InvestmentCalculatorImg} alt='no-img' />
      <h1>Investment Calculator</h1>
    </div>
    </>
  )
}

export default Header

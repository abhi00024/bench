import React, { useState } from 'react'
import { inputText } from '../util'
import InvestmentResult from '../Result';

const UserInput = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment:1000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    });

    const inputIsValid =userInput.duration>=1;

    const handleChange=(newValue, inputIdentifier)=>{
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier.toLowerCase()]: +newValue
            }
        })
    }
    
    return (
        <>
            <section id='user-input'>
                <div className='input-group'>
                    {inputText.map((item) => (
                        <p key={item.text}>
                            <label >{item.text}</label>
                            <input
                                value={userInput[item.text.toLowerCase()]}
                                onChange={(e) => { handleChange(e.target.value, item.text) }}
                                type={item.type}
                                required
                            />
                        </p>
                    ))}
                </div>

            </section>
            {!inputIsValid && (
                <p className='center'>Please Enter a number greater than zero</p>
            )}
            {inputIsValid && <InvestmentResult userInput={userInput} /> }
            
        </>
    )
}

export default UserInput

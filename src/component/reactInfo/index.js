import React, {useState} from 'react';
import "../../styles.css";
import reactLogo from '../../assest/favicon.ico';
import { content } from './util';
import { Link } from 'react-router-dom';

const ReactInfo = () =>{
    
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <>
          <header>
            <img src={reactLogo} alt="React logo" />
            <div>
              <h1>React.js</h1>
              <p>i.e., using the React library for rendering the UI</p>
            </div>
          </header>
    
          <div id="tabs">
            <menu>
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                Why React?
              </button>
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Core Features
              </button>
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Related Resources
              </button>
              <button
                className={activeContentIndex === 3 ? "active" : ""}
                onClick={() => setActiveContentIndex(3)}
              >
               React vs JS
              </button>
            </menu>
            <div id="tab-content">
              <ul>
                {content[activeContentIndex].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <h1>

          <Link to='/practiceJS'> JS Practice</Link>
          </h1>
        </>
      );
    }


export default ReactInfo;
import React, { useState } from "react";
import ComponentsTab from "./dependencies/components";
import StateTab from "./dependencies/state";
import JsxTab from "./dependencies/jsx";
import PropsTab from "./dependencies/props";
import { buttons } from "../util";

const InteractiveTabs = () => {
    const [selectedTab, setSelectedTab] = useState();

    const handleTabSelect = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <>
            <main>
                <menu>
                    {["ComponentsTab", "JsxTab", "PropsTab", "StateTab"].map(
                        (tabName) => (
                            <button
                                key={tabName}
                                className={selectedTab === tabName ? "active" : undefined}
                                onClick={() => handleTabSelect(tabName)}
                            >
                                {tabName}
                            </button>
                        )
                    )}
                </menu>
                <section id="tab-content">
                    {!selectedTab && <p>Please select a topic.</p>}
                    {selectedTab && (
                        <>
                            {selectedTab === "ComponentsTab" && <ComponentsTab />}
                            {selectedTab === "JsxTab" && <JsxTab />}
                            {selectedTab === "PropsTab" && <PropsTab />}
                            {selectedTab === "StateTab" && <StateTab />}
                        </>
                    )}
                </section>
                {/* <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div> */}
                <div id="app">
                    {buttons.map((button, index) => (
                        <section key={index}>
                            <h2>{button.text === "Filled (Default)" ? "Filled Button (Default)" : button.text}</h2>
                            <p>
                                <button
                                    mode={button.mode}
                                    disabled={button.disabled}
                                    onClick={button.onClick}
                                    className={button.className}
                                >
                                    {button.icon ?
                                        <img className="button-icon" src={button.icon} alt="no-img" />
                                        : null
                                    }
                                    {button.text}
                                </button>
                            </p>
                        </section>
                    ))}
                </div>
            </main>
        </>
    );
};

export default InteractiveTabs;

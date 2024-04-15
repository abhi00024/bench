import React, { useState } from "react";
import ComponentsTab from "./dependencies/components";
import StateTab from "./dependencies/state";
import JsxTab from "./dependencies/jsx";
import PropsTab from "./dependencies/props";

const InteractiveTabs = () => {
    const [selectedTab, setSelectedTab] = useState("ComponentsTab");

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
                    {selectedTab === "ComponentsTab" && <ComponentsTab />}
                    {selectedTab === "JsxTab" && <JsxTab />}
                    {selectedTab === "PropsTab" && <PropsTab />}
                    {selectedTab === "StateTab" && <StateTab />}
                </section>
            </main>
        </>
    );
};

export default InteractiveTabs;

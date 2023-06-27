import React, { useState } from 'react';

export const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.tabs[1]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const onClickHandler = (value) => {
        //JavaScript animation to the tab switching action.
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
              setActiveTab(value);
              setIsTransitioning(false);
            }, 300); 
          }
        
    };

    return (
        <div>
            <div>
                {props.tabs.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => onClickHandler(value)}

                        style={{
                            backgroundColor: activeTab === value ? 'black' : 'white',
                            color: activeTab === value ? 'white' : 'black',
                            transition: 'background-color 0.8s ease, color 0.8s ease',
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <button style={{ width: '400px', height: '200px', margin: '20px' }}>{activeTab} content is showing here.</button>

        </div>
    );
};


import React from 'react'

export const Display = (props) => {

    const style = {
        display: 'inline-block',
        backgroundColor: props.color,
        height: props.number + 'px',
        width: props.number + 'px',
        margin: '20px'

    };

    return (
        <div style={style}>
        </div>
    );
};

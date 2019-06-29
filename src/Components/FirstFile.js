import React from 'react';


const Component = ({ title }) => {
    console.log('title', title)
    return (
        <p>Hello {title}</p>
    )
}

export default Component;
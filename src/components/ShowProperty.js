import React from 'react';

function ShowProperty({leftText, property, rightText}) {
    return <p>{`${leftText} ${property} ${rightText || ''}`}</p>
}

export default ShowProperty;
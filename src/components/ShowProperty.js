//este seria el archivo de donde todo sale? de aca va a los componentes y de los componentes a la app de react?

import React from 'react';

function ShowProperty({leftText, property, rightText}) {
    return <p>{`${leftText} ${property} ${rightText || ''}`}</p>
}

export default ShowProperty;
import React from 'react';
import ShowProperty from './ShowProperty';

function Nacionalidad({country}) {
    return <ShowProperty leftText="Naciste en" property={country} />
}

export default Nacionalidad;

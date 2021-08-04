import React from 'react';
import ShowProperty from './ShowProperty';

function Nombre({name}) {
    return <ShowProperty leftText="Hola" property={name} rightText="¿Cómo estás?" />
}

export default Nombre;

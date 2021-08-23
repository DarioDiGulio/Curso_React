import React from 'react';
import ShowProperty from './ShowProperty';

function Edad({age}) {
    return <ShowProperty leftText="Tenés" property={age} rightText="años." />
}

export default Edad; //se exporta a quien lo quiere importar

import React from 'react';
import ShowProperty from './ShowProperty';
//importo la propiedad ShowProperty que cree antes para aplicar su funcion que es armar un texto con la misma propiedad

function TalleZapato({TalleZapato}) {
    return <ShowProperty leftText="Mi numero de calzado es" property={TalleZapato} rightText="." />
};

export default TalleZapato;


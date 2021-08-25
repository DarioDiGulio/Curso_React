import React from 'react';
import ShowProperty from './ShowProperty';
//importo la propiedad ShowProperty que cree antes para aplicar su funcion que es armar un texto con la misma propiedad

function TalleZapato({talleZapato}) { 
    return <ShowProperty leftText="Mi numero de calzado es" property={talleZapato} rightText="." />
};

export default TalleZapato;


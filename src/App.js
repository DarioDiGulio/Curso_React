import React from 'react';
import Nombre from './components/Nombre';
import Edad from './components/Edad';
import Nacionalidad from './components/Nacionalidad';
import TalleZapato from './components/TalleZapato';

function App({userData}) { //puede recibir mas atributos/parametros
  const {name, age, nacionalidad, talleZapato} = userData; //Estos vienen de props, parametro de propiedades de la funcion.

  // const userAge = userData.age
  // const userName = userData.name
  // const userNacionalidad = userData.nacionalidad
  // const userTalleZapato = userData.talleZapato


    //como si fuera un Constructor  Nombre
  return (
    <>
        <Nombre name={name} /> 
        <Edad age={age} />
        <Nacionalidad country={nacionalidad} />
        <TalleZapato talleZapato={talleZapato} />       
    </>
  );
}

export default App;

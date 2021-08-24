import React from 'react';
import Nombre from './components/Nombre';
import Edad from './components/Edad';
import Nacionalidad from './components/Nacionalidad';
import TalleZapato from './components/TalleZapato';
import Avatar from './components/Avatar';

function App({userData}) { //puede recibir mas atributos/parametros
  const {name: nameOne, age, nacionalidad, talleZapato} = userData; //Estos vienen de props, parametro de propiedades de la funcion.
  // const {name, age, nacionalidad, talleZapato} = userData[1]; //Estos vienen de props, parametro de propiedades de la funcion.

  // const userAge = userData.age
  // const userName = userData.name


    //como si fuera un Constructor  Nombre
  return (
    //TODO Agregar los dos users
    <>     
        <Avatar type="pelado"/>
        <Nombre name={nameOne} /> 
        <Edad age={age} />
        <Nacionalidad country={nacionalidad} />
        <TalleZapato talleZapato={talleZapato} />       
    </>
  );
}

export default App;

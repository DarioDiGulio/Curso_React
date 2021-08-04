import React from 'react'
import Nombre from './components/Nombre'
import Edad from './components/Edad'
import Nacionalidad from './components/Nacionalidad'

function App({propiedades}) {
  const {name, age, nacionalidad} = propiedades;

  return (
    <>
        <Nombre name={name} />
        <Edad age={age} />
        <Nacionalidad country={nacionalidad} />
    </>
  );
}

export default App;

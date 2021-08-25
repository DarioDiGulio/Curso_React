import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


//TODO Crear otro user
const usersData = { //A donde va este usersData?
  name: "Sebastián",
  age: "30",
  nacionalidad: "Mexicano",
  talleZapato: "43"
}

// const usersData = [
//   userOne: {
//     name: "Sebastián",
//     age: "30",
//     nacionalidad: "Mexicano",
//     talleZapato: "43",
//     avatar: "pelado",
//   }, 
//   userTwo: {
//     name: "Sebastián",
//     age: "30",
//     nacionalidad: "Mexicano",
//     talleZapato: "43",
//     avatar: "peludo"
//   }
// ]
//Estos atributos tengo que invocarlos con los nombres exactos

ReactDOM.render(
  <React.StrictMode>
    <App userData={usersData} /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

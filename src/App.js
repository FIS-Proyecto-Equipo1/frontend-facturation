import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bills from './Bills.js';

function App() {

  const bills = [
    {name: "Robert", surnames: "López", vehicle: "Coche", amount: "3,4", billStatus: "PAID"},
    {name: 'juan', surnames: 'Ramos', vehicle: "Bicicleta", amount: "5,3", billStatus: "UNPAID"},
    {name: "Robert", surnames: "López", vehicle: "Coche", amount: "3,4", billStatus: "PAID"},
    {name: 'juan', surnames: 'Ramos', vehicle: "Bicicleta", amount: "5,3", billStatus: "UNPAID"}
];


  return (
   <div>
      <h1>Backoffice</h1>
      <Bills bills={bills}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bills from './Bills.js';

function App() {

  const bills = [
    {billNumber: "55555", name: "Robert", surnames: "López", vehicle: "Coche", amount: "3,4", billStatus: "PAID"},
];


  return (
   <div>
      <h1>Backoffice</h1>
      <Bills bills={bills}/>
    </div>
  );
}

export default App;

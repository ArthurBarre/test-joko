import React from 'react';
import logo from './logo.svg'
import './App.css';
import { parseMolecule } from "./lib/molecule-to-atom";

const MolecularParser = () => {
  const [ formula, setFormula ] = React.useState( 'Mg3' );
  const [ atoms, setAtoms ] = React.useState( {} );

  const parseFormula = () => {
    setAtoms(parseMolecule(formula))
    console.log(atoms)
  }

  const printAtoms = Object.entries(atoms).map(([key,value])=>{
    return (
      <ul class='atoms'>
        <li>{key} : {value.toString()}</li>
      </ul>
    );
  })
  // parseMolecules()
  return(
    <div className='molecular-parser'>
      <div>Enter your chemical formula to parse : </div>
      <input value={formula} onChange={ event => setFormula( event.target.value ) } type="text"/>
      <div class='formula'> {formula} </div>
      <img src={logo} alt="logo" />
      <button onClick={ () => parseFormula() }>Parse formula</button>
      { printAtoms }
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <MolecularParser/>
    </div>
  );
}

export default App;

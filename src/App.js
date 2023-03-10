import React from 'react';
import 'normalize.css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {

  function toggleSearchBar(){
    console.log("Clicked")
   
  } 

  return (
    <div className="App">

      <Navbar searchBar={toggleSearchBar}/>

      <Main />
      
    
    </div>
  );
}

export default App;

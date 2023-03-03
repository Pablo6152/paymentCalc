import React from 'react';
import 'normalize.css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {

  function searchBar(){
    console.log("Clicked")
  } 

  return (
    <div className="App">

      <Navbar 
        searchBar={searchBar}
      />
      <Main />
      
    
    </div>
  );
}

export default App;

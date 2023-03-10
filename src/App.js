import React from 'react';
import 'normalize.css'
import './App.css';
import { toggleTheme, loadTheme } from './theme';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';


function App() {
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showSideBar, setShowSideBar] = React.useState(false)

  loadTheme()

  function searchBarToggle(){
    setShowSearchBar(!showSearchBar)

    return showSearchBar
  }

  function sideMenuToggle(){
    setShowSideBar(!showSideBar)
  }


  return (
    <div className="App">
   
      {showSearchBar === true ? <SearchBar searchBarToggle={searchBarToggle}/> : <Navbar sideMenuToggle={sideMenuToggle} searchBarToggle={searchBarToggle}/>}
      
      {showSideBar ? <SideBar sideMenuToggle={sideMenuToggle} toggleTheme={toggleTheme}/> : ""}
      

      <Main />
      
    </div>
  );
}

export default App;

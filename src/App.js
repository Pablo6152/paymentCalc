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
  const [darkMode, setDarkMode] = React.useState(Number(localStorage.getItem("darkmode")))

  React.useEffect(x => {
    loadTheme(darkMode)
    // console.log("Effect Ran")
  },[darkMode])
  
  function handleThemeChange(){
    toggleTheme()
    setDarkMode(darkMode === 1 ? 0 : 1)
  }
  
  // console.log(`Local Storage ${localStorage.getItem("darkmode")}`)
  // console.log(`React state ${darkMode}`)
  

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
      
      {showSideBar ? <SideBar sideMenuToggle={sideMenuToggle} handleThemeChange={handleThemeChange}/> : ""}
      

      <Main />
      
    </div>
  );
}

export default App;


export default function Navbar(props){
    return (
        <nav className='nav-container'>

            <span onClick={props.sideMenuToggle} className="material-icons navbar-item">
            menu
            </span>
            <h1 className='site-title navbar-item'>Hello world!</h1>
            <span onClick={props.searchBarToggle} className="material-icons navbar-item">
            search
            </span>
            
        </nav>
    )
}

export default function SearchBar(props){
    return (
        
        <nav className="search-bar">
            <input type="text" className="searchbar-item search-input" />
            <span onClick={props.searchBar} className="material-icons searchbar-item">
            clear
            </span>
        </nav>
        
    )
        
}
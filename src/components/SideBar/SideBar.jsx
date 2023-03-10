
export default function SideBar(props){

    return (

        <>
            <div className="sidebar-bg" onClick={props.sideMenuToggle}></div>

            <div className="sidebar-container">
                <div className="sidebar-item">
                    <p className="sidebar-item-name">Home</p>
                </div>
                <div className="sidebar-item">
                    <p className="sidebar-item-name">My week</p>
                </div>
                <div className="sidebar-item dark-mode" onClick={props.toggleDarkMode}>
                    <p className="sidebar-item-name">Dark mode</p>
                    <span className="material-symbols-outlined">
                        dark_mode
                    </span>
                </div>
            </div>
        </>
    )
}
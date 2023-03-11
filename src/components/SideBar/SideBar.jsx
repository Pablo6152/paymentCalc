
export default function SideBar(props){

    return (
        <>
            <div className="sidebar-bg" onClick={props.sideMenuToggle}></div>

            <div className="sidebar-container">

                    <h2 className="sidebar-title">👑My app👑</h2>

                    <div className="pages-container sidebar-global-item-propeties">
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined home-icon">home</span>
                            <p className="sidebar-item-name">Home</p>
                        </div>
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined add-icon">add_circle</span>
                            <p className="sidebar-item-name">Add a new record</p>
                        </div>
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined calendar-icon">calendar_month</span>
                            <p className="sidebar-item-name">My week</p>
                        </div>
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined summary-icon">payments</span>
                            <p className="sidebar-item-name">Summary</p>
                        </div>
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined timeline-icon">timeline</span>
                            <p className="sidebar-item-name">Timeline</p>
                        </div>
                        {/* <div className="sidebar-item">
                            <span className="material-symbols-outlined simulate-icon">auto_graph</span>
                            <p className="sidebar-item-name">Simulate</p>
                        </div> */}
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined description-icon">description</span>
                            <p className="sidebar-item-name">Your data</p>
                        </div>
                    </div>


                    <div className="settings-container sidebar-global-item-propeties">

                        <div className={`sidebar-item dark-mode ${props.active}`} onClick={props.handleThemeChange}>

                            <span className="material-symbols-outlined theme-toggle-on">
                                {props.toggleState}
                            </span>

                            <p className="sidebar-item-name">Dark mode</p>
                            
                        </div>

                        <div className="sidebar-item settings-item">
                            <span className="material-symbols-outlined">
                                info
                            </span>
                            <p className="sidebar-item-name">About me</p>
                        </div>

                        <div className="sidebar-item settings-item">
                            <span className="material-symbols-outlined">
                                help
                            </span>
                            <p className="sidebar-item-name">How to use the app</p>
                        </div>

                        {/* <div className="sidebar-item settings-item">
                            <span className="material-symbols-outlined">handshake</span>
                            <p className="sidebar-item-name">Give your opinion</p>
                        </div> */}

                        <div className="sidebar-item settings-item">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                            <p className="sidebar-item-name">Settings</p>
                        </div>
                        
                    </div>

            </div>
        </>
    )
}
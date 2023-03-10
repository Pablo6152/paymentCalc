
export default function SideBar(props){

    return (
        <>
            <div className="sidebar-bg" onClick={props.sideMenuToggle}></div>

            <div className="sidebar-container">

                    <h2 className="sidebar-title">My app</h2>

                    <div className="pages-container sidebar-global-item-propeties">
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined">home</span>
                            <p className="sidebar-item-name">Home</p>
                        </div>
                        <div className="sidebar-item">
                            <span className="material-symbols-outlined">calendar_month</span>
                            <p className="sidebar-item-name">My week</p>
                        </div>
                    </div>

                    <div className="settings-container sidebar-global-item-propeties">
                        <div className="sidebar-item dark-mode" onClick={props.handleThemeChange}>
                            <span className="material-symbols-outlined theme-toggle-on">toggle_on</span>
                            <p className="sidebar-item-name">Dark mode</p>
                        </div>
                    </div>

            </div>
        </>
    )
}
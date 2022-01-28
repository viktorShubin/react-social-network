import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div><NavLink to="/profile">Profile</NavLink> </div>
            <div><NavLink to="/message">Message</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink> </div>
        </nav>
    )
}

export default Sidebar;
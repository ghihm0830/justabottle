import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import DropdownItems from "./Dropdown";

function Nav() {
    const [open, setOpen] = useState(false); //show open when clicked

    return <nav className="navbar">
        <img className="brand" src="imgs/justabottle.png" alt="brand logo" />

        <div className="options">
            <a href="#" className="toggle-button" open={open} onClick={() => setOpen(!open)}>
                <MenuIcon style={{fontSize: "40px"}}/>
            </a>
            <ul className="nav-links" style={{display: open ? "block" : null}}>
                <li><a href="">Option 1</a></li>
                <li><a href="">Option 2</a></li>
                <li><a href="">Option 3</a></li>
                <li><a href="">Option 4</a></li>
            </ul>
        </div>

        <DropdownItems />


    </nav>
}

export default Nav;
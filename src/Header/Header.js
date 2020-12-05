import React from 'react';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FolderIcon from '@material-ui/icons/Folder';
function Header() {
    return (
        <nav className="header">
            <div className="header__left">
                <h3>Containers</h3>
                <h3>Hosts</h3>
                <h3>Apps</h3>
                <h3>Resources</h3>
                <h3>Admin</h3>
            </div>
            <div className="header__right">
                <FolderIcon/> 
                <h3>Default</h3>
                <div className="header__icons">
                
                <ArrowBackIosIcon/>
                <ArrowForwardIosIcon/>
                </div>
                
            </div>
        </nav>
    )
}

export default Header

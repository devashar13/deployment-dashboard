import React from 'react';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FolderIcon from '@material-ui/icons/Folder';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="header">
            <div className="header__left">
                <Link
                className="header__link"
                 to='/container'>
                <h3>Containers</h3>
                </Link>
                
                
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

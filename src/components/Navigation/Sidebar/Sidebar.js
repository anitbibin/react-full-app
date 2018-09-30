import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Sidebar.css';

const sidebar = (props) => {
    return(
        <div>
            <Backdrop show/>
            <div className="Sidebar">
                <div className="Logo">LOGO</div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    );
};

export default sidebar;
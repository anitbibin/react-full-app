import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <div>LOGO</div>
        <nav classes="DesktopOnly">
            <NavigationItems />    
        </nav>
    </header> 
);

export default toolbar;
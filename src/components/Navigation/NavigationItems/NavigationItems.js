import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem active>Chat</NavigationItem>
        <NavigationItem>Picture</NavigationItem>
    </ul>
);

export default navigationItems;
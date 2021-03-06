import React from 'react';
import classes1 from './NavigationItem.css';

const navigationItem = (props) => (
    <li  className="NavigationItem">
        <a href="/" className={props.active? "active" : null}>{props.children}</a>
    </li>
);

export default navigationItem;
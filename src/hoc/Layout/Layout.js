import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Aux from '../Auxy/Auxy';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <Sidebar />
                <main> {this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
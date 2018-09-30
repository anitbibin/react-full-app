import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        Hello World
        </Layout>
        {/* <Switch>
          <Route path='/' exact component={Login} />
        </Switch> */}
      </div>
    );
  }
}

export default App;

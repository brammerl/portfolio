import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from "react-router-dom";

import Home from './components/Home';
import Navigation from './components/Navigation';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route
                            path='/Home'
                            exact
                            render={(routerProps) => <Home {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

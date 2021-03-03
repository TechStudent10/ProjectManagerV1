import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Project from './Project';
import CreateProject from './CreateProject';

function App(props) {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        Homepage
                    </Route>
                    <Route path="/project/:projectCode" component={Project} />
                    <Route path="/create" component={CreateProject} />
                </Switch>
            </Router>
        </div>
    )
}

export default App

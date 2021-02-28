import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App(props) {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        Homepage
                    </Route>
                    <Route path="/project/:projectCode" render={(props) => {
                        {token}
                        <h1>
                            eiouriogruogurguperogoier
                        </h1>
                        console.log(token);
                    }} />
                    <Route path="/addProject">
                        Create a project
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

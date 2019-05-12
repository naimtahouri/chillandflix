import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './core/Nav';
import Popular from './Popular/Popular';
import Home from './Home/Home';
import List from './Liste/List';
import Kids from './Kids/Kids';

class AppContainer extends React.Component {
    
    render() {
        return(
        <div>
            <BrowserRouter>
                <Nav />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Popular" exact component={Popular} />
                        <Route path="/List" exact component={List} />
                        <Route path="/Kids" exact component={Kids} />
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default AppContainer;
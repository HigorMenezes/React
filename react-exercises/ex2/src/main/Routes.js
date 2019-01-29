import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Todo from '../todo/Todo';
import About from '../about/About';

export default props => (
    <HashRouter>
        <Switch>
            <Route path="/todos" exact={true} exa component={Todo} />
            <Route path="/about" exact={true} component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
    </HashRouter>
);
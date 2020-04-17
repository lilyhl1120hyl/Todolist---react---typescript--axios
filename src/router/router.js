import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import { createHashHistory } from 'history';


import { Home,Detail } from "../pages";
// import Detail from '../pages/Detail/detail';
import Example from '../pages/Example/Example';

const hashHistory = createHashHistory();

const TestRouter=()=>(
	<HashRouter history={hashHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/example" component={Example}/>
        </Switch>
    </HashRouter>
);
export {TestRouter};


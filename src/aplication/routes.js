import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../pages/menu';
import Presupuesto from '../pages/presupuesto';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/presupuesto/" component={Presupuesto} />
                <Route path="*" component={() => <div>404</div> } />
            </Switch>
        </BrowserRouter>
    );


}  
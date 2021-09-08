import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Info from './pages/Info'


function Routes(){



    return(

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/info">
                <Info />
            </Route>
        </Switch>

    );

}

export default Routes;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';

export default function Router() {
    const [name, setName] = useState('')

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login name={name} setName={setName} />
                </Route>
                <Route path='/feira'>
                    <Feira />
                </Route>
                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

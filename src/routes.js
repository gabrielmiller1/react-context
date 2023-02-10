import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UserContext } from 'common/context/User';

export default function Router() {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <UserContext.Provider value={{name, setName, balance, setBalance}}>
                        <Login />
                    </UserContext.Provider>
                </Route>
                <Route path='/feira'>
                    <Feira
                        name={name}
                        balance={balance}
                    />
                </Route>
                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

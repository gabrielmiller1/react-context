import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UserProvider } from 'common/context/User';
import { CartProvider } from 'common/context/Cart';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <CartProvider>
                        <Route path='/feira'>
                            <Feira />
                        </Route>
                    </CartProvider>
                </UserProvider>
                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

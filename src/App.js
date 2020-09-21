import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';

function App() {
    return (
        <BrowserRouter>

            <header>
                <h1>Meu Site</h1>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                </ul>
                </nav>
            </header>

        <hr/>

        <Switch>

            <Route exact path="/">
            <Home />
            </Route>

            <Route path="/login">
            <Login />
            </Route>

            <Route path="/sobre">
            <Sobre />
            </Route>

            <Route path="*">
            <h1>Página não encontrada.</h1>
            </Route>
            
        </Switch>

        <hr/>

        <footer>
            Todos os direitos reservados.
        </footer>
        </BrowserRouter>
    )
}

export default App;

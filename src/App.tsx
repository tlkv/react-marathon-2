import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
/* import Header from './components/Header'; */
import Footer from './components/Footer';
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PokedexNew from './pages/Pokedex';
import {useRoutes} from "hookrouter";
import routes from './routes';
import NotFoundPage from './pages/NotFound';


const App = () => {    
    /* <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/pokedex" component={PokedexNew} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </> */
    const match = useRoutes(routes);
    return match || <NotFoundPage />;
}

export default App;
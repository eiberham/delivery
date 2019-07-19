import React from 'react';
import './App.scss';
import {Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import DeliveryCreate from './components/DeliveryCreate';
import DeliveryEdit from './components/DeliveryEdit';
import DeliveryList from './components/DeliveryList';
import history from './history';

const App = () => {
    return (
        <div className="app">
            <div className="container-fluid">
                <div className="wrapper">
                    <Router history={history}>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={DeliveryList}></Route>
                            <Route path="/delivery" exact component={DeliveryList}></Route>
                            <Route path="/delivery/create" exact component={DeliveryCreate}></Route>
                            <Route path="/delivery/:id" component={DeliveryEdit}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
};

export default App;
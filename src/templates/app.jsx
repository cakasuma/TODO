import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Pin from './pages/pin';
import Header from './components/header';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/pin" component={Pin} />
            </BrowserRouter>
        );
    }
}

export default App;
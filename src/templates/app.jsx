import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Home2 from './pages/home2';
import Header from './components/header';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/home2" component={Home2} />
            </BrowserRouter>
        );
    }
}

export default App;
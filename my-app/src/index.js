import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// import Fragment from "./fragment";
// import CounterButton from "./counterButton";

import { BrowserRouter as Router, Route } from 'react-router-dom'

const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            Our React Router 4 App
        </header>
        <main>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={UsersPage} />
        </main>
    </div>
)
const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
    <Router>
        <PrimaryLayout />
    </Router>
)

ReactDom.render(
   <App/>,
    document.getElementById('root')
)




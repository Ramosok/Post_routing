// libraries
import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
// components
import List from './List';
import Post from './Post';
import Form from './Form';
import Layout from './Layout';
// styles
import './App.css';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/post/:id" component={Post} />
                <Route path="/newpost" component={Form} />
            </Switch>
        </Layout>
    );
};

export default App;

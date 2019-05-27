import React, {Component} from 'react';

import './App.css';

import PostList from "./container/PostList";
import WelCome from "./container/WelCome";

class App extends Component {
    render() {
        return (
            [
                <WelCome key= 'WelCome' name={'wwx'}/>,
                <PostList key = 'PostList'/>

            ]
        );
    }
}

export default App;

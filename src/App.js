import React, {Component} from 'react';

import './App.css';

import PostList from "./container/PostList";
import WelCome from "./container/WelCome";
import LoginForm from './container/LoginForm';
import StackSelectForm from "./container/StackSelectForm";
import StackCheckBoxForm from "./container/StackCheckBoxForm";
import SimpleForm from "./container/SimpleForm";
import SimpleFunForm from "./container/SimpleFunForm";
import ErrorBoundary from "./container/ErrorBoundary";
import Modal from "./container/Modal";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: true };
    }
    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div>
                {
                    <SimpleForm></SimpleForm>
                }
            </div>
        );
    }
}

export default App;

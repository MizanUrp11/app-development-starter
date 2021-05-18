import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Urls extends Component {
    state = {
        loggedIn: true
    }
    componentWillMount() {
        if (!localStorage.getItem("access_token")) {
            this.state.loggedIn = false;
        }
    }
    render() {
        if(!this.state.loggedIn){
            return(<Redirect to="/" />);
        }
        return (
            <div>
                <h2>Private content</h2>
            </div>
        );
    }
}

export default Urls;

import { Component } from 'react';
class Loginsignup extends Component {
    state = {
        isSignup: false,
        fullname: "",
        email: "",
        password: ""
    }
    showSignupForm = () => {
        this.setState({ isSignup: true })
    }
    showLogin = () => {
        this.setState({ isSignup: false })
    }
    updateStateValue = (e) => {
        let tgt = e.target;
        let stateName = tgt.name;
        let val = tgt.value;
        debugger;
        this.setState({
            [stateName]: val
        })
    }
    render() {
        return (
            <div style={styles.container}>
                <div className="loginsignup">
                    <input onChange={this.updateStateValue} style={{ ...styles.input, display: this.state.isSignup ? "block" : "none" }} type="text" name="fullname" placeholder="Enter Name" />
                    <input onChange={this.updateStateValue} style={styles.input} type="email" name="email" placeholder="Enter Email" />
                    <input onChange={this.updateStateValue} style={styles.input} type="password" name="password" placeholder="Enter Password" />
                </div>
                <div style={{ display: this.state.isSignup ? "none" : "block" }} onClick={this.showSignupForm}>Sign up now</div>
                <div style={{ display: this.state.isSignup ? "block" : "none" }} onClick={this.showLogin}>Go back to Login</div>
            </div>
        );
    }
}

const styles = {
    container: {
        fontSize: 24,
        color: "red"
    },
    input: {
        fontSize: 18,
        color: "blue",
        display: "block",
        margin: 20
    }
}

export default Loginsignup;

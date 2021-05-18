import { Component } from 'react';
import "../bootstrap.min.css";
import "animate.css";
import "../style.css";
import axios from 'axios';
import values from '../values';


class Loginsignup extends Component {
    state = {
        isSignup: true,
        fullname: "",
        email: "",
        password: "",
        loginSuccess: false
    }
    showSignupForm = () => {
        this.setState({ isSignup: true });
    }
    showLogin = () => {
        this.setState({ isSignup: false });
    }
    updateStateValue = (e) => {
        let tgt = e.target;
        let stateName = tgt.name;
        let val = tgt.value;
        //debugger;
        this.setState({
            [stateName]: val
        })
    }
    loginSignup = () => {
        let { email, password } = this.state;
        if (this.state.isSignup) {
            if (this.state.fullname && this.state.email && this.state.password) {
                let name = this.state.fullname;
                axios.post(`${values.BASE}/signup`, { name, email, password })
                    .then(d => {
                        // debugger;
                        alert(`${d.data.message}`);
                        this.setState({ isSignup: false })
                    })
                    .catch(e => {
                        // debugger;
                        console.log("Sign up Error! please try again");
                    })
                    .then(d => {
                        this.setState({
                            fullname: "",
                            email: "",
                            password: ""
                        })
                    })
            } else {
                alert("Parameter missing.");
            }
        } else {
            axios.post(`${values.BASE}/login`, { email, password })
                .then(d => {
                    let {token} = d.data;
                    // debugger;
                    this.setState({ loginSuccess: true });
                })
                .catch(e => {
                    alert("login unsuccessful.");
                })
            if (this.state.email && this.state.password){

            }else{
                alert("Parameter missing for login.");
            }
        }
    }
    render() {
        return (
            <div className="container full-height">
                <div className="row full-height col-md-6 offset-md-3 justify-content-center align-items-center">
                    <div className={"p-4", "bg-light", "border", "border-1", "rounded", this.state.isSignup ? "animate__animated animate__bounceInLeft" : "animate__animated animate__bounceInRight"}>
                        <h2 className="mb-4" id="Sign-Up-heading">{this.state.isSignup ? "Sign up" : "Login"}</h2>
                        <div className="mb-3" style={{ display: this.state.isSignup ? "block" : "none" }}>
                            <input onChange={this.updateStateValue} name="fullname" className="form-control" type="text" placeholder="Enter Name" />
                        </div>
                        <div class="mb-3">
                            <input onChange={this.updateStateValue} name="email" className="form-control" type="email" placeholder="Enter Email" />
                        </div>
                        <div class="mb-3">
                            <input onChange={this.updateStateValue} name="password" className="form-control" type="password" placeholder="Enter Password" />
                        </div>
                        <div class="d-grid gap-2">
                            <button onClick={this.loginSignup} className="btn btn-primary" type="button">{this.state.isSignup ? "Sign up" : "Login"}</button>
                            <button style={{ display: this.state.isSignup ? "none" : "block" }} onClick={this.showSignupForm} className="btn btn-primary" type="button">Sign Up Now →</button>
                            <button style={{ display: this.state.isSignup ? "block" : "none" }} onClick={this.showLogin} className="btn btn-primary" type="button">← Go Back To Login</button>
                        </div>
                    </div>
                </div>
            </div>







        );
    }
}

export default Loginsignup;

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import values from '../values';

function Conditional(props) {
    if (props.condition) {
        return (
            <div className={props.className}>
                {props.children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    } else {
        return null;
    }
}

class Urls extends Component {
    state = {
        loggedIn: true,
        loading: false,
        newHash: "",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFiY2QiLCJlbWFpbCI6ImhlbGxvQHRlc3QuY29tIiwiaWF0IjoxNjIxMzMzMjUxfQ.qjOzXZz22kPVtiXE9269nCsOSrdFRu90hvkfEtT5sX4"
    }
    componentWillMount() {
        if (!localStorage.getItem("access_token")) {
            this.state.loggedIn = false;
        }
    }

    scheduleClear = () => {
        this.setState({ newHash: "" });
    }

    HandleKeyUp = (e) => {
        if (e.keyCode === 13) {
            // alert("hello");
            if (e.target.value && e.target.value.match(/^https?:\/\/.{3,}/)) {
                this.setState({ loading: true });
                axios.post(`${values.BASE}/api/v1/redirects`, { url: e.target.value }, { headers: { "auth-token": this.state.token } })
                    .then(d => {
                        console.log(d);
                        alert("Direction created");
                        this.setState({ newHash: d.data.hash });
                        setTimeout(this.scheduleClear, 5000);
                    })
                    .catch(e => {
                        console.log(e)
                    })
                    .finally(() => {
                        this.setState({ loading: false });
                    })
            }
        }
    }

    render() {
        if (!this.state.loggedIn) {
            return (<Redirect to="/" />);
        }
        return (
            <div>
                <div className="container mt-5">
                    <h2 className="text-center py-5 my-3">Welcome to Dashboard</h2>
                    <div className="row bg-light py-3 rounded mb-3">
                        <div className="col-md-12">
                            <div>
                                <input onKeyUp={this.HandleKeyUp} className="form-control" type="url" placeholder="Enter url and press Enter to shorten." />
                            </div>
                        </div>
                    </div>

                    <div className="row bg-info py-3 rounded mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <p style={{ "max-width": 150 }} className="text-secondary text-truncate">www.google.com/he/juhy/hyhyd6e7fjjr875hsgd/jhhhe</p>
                                </div>
                                <div className="col-md-4 d-none d-lg-block d-xl-none">
                                    <p className="text-secondary text-end">March 21, 2018, 12:30 PM</p>
                                </div>
                            </div>
                            <div className="row">
                                <h3>www.go-gl.com/567hde</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 rounded mb-3 bg-dark">
                        <div className="col-md-12">
                            <h3 className="text-center text-light">There is no shortend url</h3>
                        </div>
                    </div>

                    <Conditional condition={this.state.newHash} className="alert alert-warning alert-dismissible fade show" style={{ position: "fixed", bottom: 0, right: 0 }} role="alert">
                        {`${values.BASE}/${this.state.newHash}`}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </Conditional>
                </div>

            </div>
        );
    }
}



export default Urls;

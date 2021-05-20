import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button, Col, Row, Toast } from "react-bootstrap";



class Urls extends Component {
    state = {
        loggedIn: true,
        show: false,
        setShow: false
    }
    componentWillMount() {
        if (!localStorage.getItem("access_token")) {
            this.state.loggedIn = false;
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
                                <input className="form-control" type="url" placeholder="Enter url and press Enter to shorten." />
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

                    <div className="alert alert-warning alert-dismissible fade show" style={{ position: "fixed", bottom: 0, right: 0 }} role="alert">
                        Url Added.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>

            </div>
        );
    }
}



export default Urls;

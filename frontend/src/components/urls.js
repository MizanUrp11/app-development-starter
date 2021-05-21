import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import values from '../values';

function Conditional(props) {
    if (props.condition) {
        return (
            <div className={props.className}>
                {props.children}
            </div>
        )
    } else {
        return null;
    }
}
function UrlNotFound(props) {
    if (props.condition) {
        return (
            <div className="row py-3 rounded mb-3 bg-dark">
                <div className="col-md-12">
                    <h3 className="text-center text-light">There is no shortend url</h3>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
function UrlComponent(props) {
    return (
        <div className="row bg-info py-3 rounded mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p style={{ "max-width": 150 }} className="text-secondary text-truncate">{props.data.destination}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block d-xl-none">
                        <p className="text-secondary text-end">{props.data.createdAt.split("T")[0]}</p>
                    </div>
                </div>
                <div className="row">
                    <a target="_blank" className="h3 text-dark text-decoration-none" href={props.data.destination}>{`${values.BASE}/${props.data.hash}`}</a>
                </div>
            </div>
        </div>
    );
}

class Urls extends Component {
    state = {
        loggedIn: true,
        loading: false,
        newHash: "",
        token: "",
        urlList: []
    }
    componentWillMount() {
        let token = localStorage.getItem("access_token");
        if (!token) {
            this.setState({ loggedIn: false });
        } else {
            this.setState({ token }, this.getMyList);
        }
    }
    getMyList = () => {
        axios.get(`${values.BASE}/api/v1/redirects`, { headers: { "auth-token": this.state.token } })
            .then(d => {
                this.setState({ urlList: d.data });
                console.log(d.data[0]);
            })
            .catch(e => {
                console.log(e);
            })
    }

    scheduleClear = () => {
        this.setState({ newHash: "" });
    }

    HandleKeyUp = (e) => {
        if (e.keyCode === 13) {
            let urlValue = e.target.value;
            e.target.value = "";
            if (urlValue && urlValue.match(/^https?:\/\/.{3,}/)) {
                this.setState({ loading: true });
                axios.post(`${values.BASE}/api/v1/redirects`, { url: urlValue }, { headers: { "auth-token": this.state.token } })
                    .then(d => {
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
                    <div className="row bg-light py-3 rounded">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label" for="urls">Input Url</label>
                                <input id="urls" onKeyUp={this.HandleKeyUp} className="form-control" type="url" placeholder="Enter url and press Enter to shorten." />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Conditional condition={this.state.newHash} className="alert alert-success alert-dismissible fade show" style={{ position: "fixed", bottom: 0, right: 0 }} role="alert">
                            {`${values.BASE}/${this.state.newHash}`}
                        </Conditional>
                    </div>

                    <div className="url-list">
                        {this.state.urlList.reverse().map((el, i) => <UrlComponent data={el} key={i} />)}
                    </div>

                    <UrlNotFound condition={!this.state.urlList.length}> </UrlNotFound>
                </div>

            </div>
        );
    }
}



export default Urls;

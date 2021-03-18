import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';


function Login() {
    const LOGIN_API = "http://localhost:8000/auth";
    const history = useHistory();

    const login_form_style = {
        width: "500px",
        marginLeft:"auto",
        marginRight:"auto",
    }

    const login_button_style = {
        width:"100px",
        float:"right",
        backgroundColor:"#091473",
    }


    const login = event => {
        const loginData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }

        axios.post(LOGIN_API,  loginData )
          .then(res => {
            localStorage.setItem('jwtToken', res['data']['jwtToken']);
            history.push("")
        }).catch(err=> {
            alert("Invalid username or login");
        })
    }


    return (
        <div className="container">
            <div>
                <form className="mt-5" style={login_form_style} onSubmit={e => { e.preventDefault(); login(e)}}>
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h1 className="text-center mb-3 float-left">Login</h1>
                        </div>
                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button type="submit" className="btn btn-primary py-2" style={login_button_style}>
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

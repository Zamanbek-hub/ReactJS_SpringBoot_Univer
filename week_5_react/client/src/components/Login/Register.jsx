import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Register() {
    const REGISTER_API = "http://localhost:8000/register";
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);

    const register_form_style = {
        width: "500px",
        marginLeft:"auto",
        marginRight:"auto",
    }

    const register_button_style = {
        width:"100px",
        float:"right",
        backgroundColor:"#091473",
    }


     const register = async event => {
        const registerData = {
            full_name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            re_password: event.target[3].value,
        }
        
        if(registerData.password === registerData.re_password){

            console.log("registerData =");
            console.log(registerData);

            // console.log({
            //     "Content-Type": "application/json",
            //     "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImV4cCI6MTYxNjAyNTM5MSwiaWF0IjoxNjE2MDA3MzkxfQ.q5zFYXtjbSGKXuS4K3S35jPfqoIqp5x3wpd5cpiEnd9QcDKeBOyDB9jSs5TSY2l_d-5ucDwLAPeMNn9cd8OrYA"
            // })
            // const response = await fetch(REGISTER_API, {
            //     method: "POST", 
            //     mode: "cors", 
            //     cache: "no-cache", 
            //     credentials: "same-origin",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImV4cCI6MTYxNjAyNTM5MSwiaWF0IjoxNjE2MDA3MzkxfQ.q5zFYXtjbSGKXuS4K3S35jPfqoIqp5x3wpd5cpiEnd9QcDKeBOyDB9jSs5TSY2l_d-5ucDwLAPeMNn9cd8OrYA"
            //     },
            //     redirect: "follow",
            //     referrerPolicy: "no-referrer",
            //     body: JSON.stringify(registerData)
            // })

            
            // if (response.status == 200){
            //     let jwt = await response.json();
            //     setCookie('jwtToken', jwt);
            // }

            axios.post(REGISTER_API,  registerData )
            .then(res => {
              history.push("login");
            })
        } else {
            alert("Password and Re_Password does not match");
        }


        
    }


    return (
        <div className="container">
            <div>
                <form className="mt-5" style={register_form_style} onSubmit={e => { e.preventDefault(); register(e)}}>
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h1 className="text-center mb-3 float-left">Register</h1>
                        </div>
                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="name" type="text" name="name" placeholder="Full name" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="name" type="text" name="name" placeholder="Full name" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" name="re_password" placeholder="Repeat password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button type="submit" className="btn btn-primary py-2" style={register_button_style}>
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

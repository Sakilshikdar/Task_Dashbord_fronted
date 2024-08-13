import React, { useState } from 'react';
import axios from 'axios';

function CustomerLogin() {
    const baseurl = 'https://dashboard-backend-jfha.onrender.com/'
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [loginFormData, setLoginFormData] = useState({
        "username": '',
        "password": ''
    });

    const inputHandeler = (e) => {
        setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    }
    // console.log(loginFormData);

    const submitHandler = (e) => {
        e.preventDefault(); 

        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);
        axios.post(baseurl + 'customer/login/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                }
                else {
                    localStorage.setItem('customer_login', true);
                    setFormError(false);
                    setErrorMsg('Login Successfull');

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        window.location.href = '/';
    }

    const buttonDisable = loginFormData.username.length > 0 && loginFormData.password.length > 0;


    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 col-12 offset-2 card">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Login
                            </h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input type="text" name="username" onChange={inputHandeler} value={loginFormData.username} className="form-control" id='username' placeholder="Enter user name" />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" name="password" onChange={inputHandeler} value={loginFormData.password} className="form-control" id="pwd" placeholder="Password" />
                                </div>
                                <button onClick={submitHandler} disabled={!buttonDisable} type="button" className="btn btn-primary my-3">Submit</button>
                                {
                                    formError && <p className="text-danger">{errorMsg}</p>

                                }
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default CustomerLogin;
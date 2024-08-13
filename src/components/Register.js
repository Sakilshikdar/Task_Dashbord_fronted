import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Register() {

    const baseurl = 'https://dashboard-backend-jfha.onrender.com/'
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsgs, setErrorMsgs] = useState('');

    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        "last_name": '',
        "username": '',
        "email": '',
        "password": '',
    });

    const inputHandeler = (e) => {
        setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('email', registerFormData.email);
        formData.append('username', registerFormData.username);
        formData.append('password', registerFormData.password);
        axios.post(baseurl + 'customer/register/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setErrorMsg(response.data.msg);
                    setSuccessMsg('');
                }
                else {
                    setRegisterFormData({
                        "first_name": '',
                        "last_name": '',
                        "username": '',
                        "email": '',
                        "password": '',
                    })
                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg(response.data.msg);
                    
                    window.location.href = '/';
                    localStorage.setItem('customer', true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const buttonDisable = registerFormData.first_name.length > 0 && registerFormData.last_name.length > 0 && registerFormData.username.length > 0 && registerFormData.email.length > 0 && registerFormData.password.length > 0;

    if (localStorage.getItem('customer')) {
        window.location.href = '/';
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 col-12 offset-2 card">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Register
                            </h3>
                        </div>
                        <div className="card-body">

                            {successMsg && <div className="text-success mb-2">{successMsg}</div>}
                            {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}
                            <form>
                                <div className="form-group">
                                    <label for="firstname">First Name</label>
                                    <input name='first_name' onChange={inputHandeler} value={registerFormData.first_name} type="text" className="form-control" id='firstname' placeholder="Enter first name" />
                                </div>
                                <div className="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" name='last_name' onChange={inputHandeler} value={registerFormData.last_name} className="form-control" id='lastname' placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input type="text" name='username' onChange={inputHandeler} value={registerFormData.username} className="form-control" id='username' placeholder="Enter user name" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" name='email' onChange={inputHandeler} value={registerFormData.email} className="form-control" id='email' placeholder="Enter email" />
                                </div>
                               
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" name='password' onChange={inputHandeler} value={registerFormData.password} className="form-control" id="pwd" placeholder="Password" />
                                </div>

                                <button onClick={submitHandler} disabled={!buttonDisable} type="button" className="btn btn-primary my-3">Submit</button>
                                <p>have accoutn ? Please <Link to='/login' className='text-primary'>Login</Link></p>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Register;
import React from 'react';
import {NavLink} from "react-router-dom";

function Login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">

                <div className="card">
                    <div className="text-center">
                        kembali ke <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
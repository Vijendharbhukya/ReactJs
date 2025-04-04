import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';
// import Company from './models/Company';

const Login = () => {

    const history = useHistory();

    const [appUser, setAppUser] = useState(new AppUser());
    const [credentials, setCredentials] = useState('');

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        axios.post(`http://localhost:8082/login`, appUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
 }
export default Login;
// const [company, setCompany] = useState(new Company());
//     const [credentials, setCredentials] = useState('');

//     const handleCompany = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setCompany({
//             ...company,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitCompany = (event) => {
//         axios.post(`http://localhost:8082/login`, company)
//             .then((response) => {
//                 console.log(response.data);
//                 sessionStorage.setItem('isUserLoggedIn', true);
//                 alert('Success');
//                 window.location.assign('/home');
//                 // history.push('/home');
//             }).catch((error) => {
//                 sessionStorage.setItem('isUserLoggedIn', false);
//                 sessionStorage.clear();
//                 console.log(error.response);
//                 setCredentials("Enter proper credentials.");
//             });
//         event.preventDefault();
//     }
//     return (
//         <div className="container">
//             <div className="col-4 mt-3" >
//                 <h1 className="display-4 text-primary">Login</h1>
//                 <form className="form form-group form-dark " onSubmit={submitCompany}>
//                     <div>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="companyName"
//                             id="companyName"
//                             className="form-control mb-3"
//                             placeholder="Enter companyname"
//                             value={company.companyName}
//                             onChange={handleCompany}
//                             autoFocus
//                             required
//                         />
//                         <input
//                             type="number"
//                             className="form-control"
//                             name="number"
//                             id="number"
//                             className="form-control mb-3"
//                             placeholder="Enter number"
//                             value={company.number}
//                             onChange={handleCompany}
//                             required
//                         />
//                         <div class="form-group">
//                             <select class="form-control mb-3" name="role" id="role" onChange={handleCompany}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="COMPANYID">COMPANYID</option>
//                                 <option value="COMPANYNAME">COMPANYNAME</option>
//                                 {/* <option value="MANAGER">MANAGER</option> */}
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-primary mb-3"
//                             value="Login"
//                             onClick={submitCompany}
//                         />
//                     </div>
//                 </form>
//                 <p className="text-danger">{credentials}</p>
//                 <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
//             </div>
//         </div >
//     )
// }

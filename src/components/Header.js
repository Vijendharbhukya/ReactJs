import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/hello" >Hello</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/company" >Company</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/spring" >Spring</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/companyData" >Company</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;





// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <header class="header sticky-top">
//             <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container">
//                     <Link className="navbar-brand" to="/">
//                         <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                             height="24px" alt="Capgemini" />
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/hello" >Hello</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/emp" >Emp</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/spring" >Spring</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register" >Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login" >Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/logout" >Logout</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Header;




// types of components in react 
// 1. function components 
// 2. class components 


// function component 
// const Header = () => {

//     return (
//         <div className="display-4">
//             <p>Header Component</p>
//         </div>
//     );
// }
// export default Header;

// class component  
// import React from "react";
// class Header extends React.Component {

//     // constructor() { super(); }

//     render = () => {
//         return (
//             <div className="display-4" >
//                 <p>Header Component</p>
//             </div>
//         )
//     }
// }
// export default Header;
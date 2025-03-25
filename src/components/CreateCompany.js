// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Company from "./models/Company";

// const CreateCompany = (props) => {
//   const history = useHistory();

//   const [company, setCompany] = useState(new Company());
//   const [credentials, setCredentials] = useState("");

//   const handleCompany = (event) => {
//     // console.log(event.target.name);
//     // console.log(event.target.value);
//     // setCompany(event.target.value),
//     // setManager("");
//     setCompany({
      
//       ...company,
//       [event.target.name]: event.target.value,
//     });
    
//   };
//   const resetInputField = () => {
//     setCompany("");
//   };
//   const submitCompany = (event) => {
//     // setManager("");
//     axios
//       .post(`http://localhost:8082/addCompanyInfo`)
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("company", company);
//         alert("Data Added  Sucessfully");
//         history.push("/company"); // check this method to navigate
//       })
//       .catch((error) => {
//         console.log(error.response);
//         setCredentials("Enter proper credentials.");
//       });
//     event.preventDefault();
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <h4 className=" text-black text-center mt-1">Add Company</h4>
//           <div className="card-body">
//             <form
//               className="form form-group form-primary "
//               onSubmit={submitCompany}
//             >
//               <input
//                 type="text"
//                 className="form-control"
//                 name="companyName"
//                 id="companyName"
//                 className="form-control mb-3"
//                 placeholder="Enter Company Name"
//                 value={company.companyName}
//                 onChange={handleCompany}
//                 autoFocus
//                 required
//               />
//               <input
//                 type="number"
//                 className="form-control"
//                 name="companyid"
//                 id="companyid"
//                 className="form-control mb-3"
//                 placeholder="Enter CompanyId"
//                 value={company.companyId}
//                 onChange={handleCompany}
//                 autoFocus
//                 required
//               />
              
//               <button className="btn btn-success" onClick={submitCompany}>
              
//                 Add
//               </button>

//               <button className="btn btn-danger ml-2 " onClick={resetInputField}>
               
//                   Cancel
             
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div>{/* https://material.io/components/dialogs/web#alert-dialog */}</div>
//     </div>
//   );
// };
// export default CreateCompany;
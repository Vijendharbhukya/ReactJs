// import { useDispatch, useSelector  } from "react-redux";
// import { useState } from "react";
// import { getAllCompanyService,getCompanyByIdService,insertCompanyService} from "../services/CompService";
// import axios from "axios";
// import Company from "../models/Company";


// import { getcompanyById,getAllCompany, deletecompanyById, addcompany, updatecompanyInfo } from "../../redux/CompSlice";

// const updateCompanyInfo = () => {

//     const [companyId, setCompanyId] = useState('');
//     const dispatch = useDispatch();
//     const companyDataFromStore = useSelector((state) => state.company.companyState);
//     const companyList = useSelector((state) => state.company.companyList);

//      const [newCompanyObj, setNewCompanyObj] = useState(new Company());
//     const [updtCompanyInfoObj, setUpdtCompanyInfoObj] = useState(new Company());
//      const [displayCompanyInfoObj, setDisplayCompanyInfoObj] = useState(new Company());
//     const [updateCompanyInfoObj, setUpdateCompanyInfoObj] = useState('');
 

//     const handleUpdateCompanyInfo = (e) => {
//         console.log(e.target.value);
//         setUpdtCompanyInfoObj({
//             ...updtCompanyInfoObj,
//             [e.target.name]: e.target.value,
//         });
//     }

//     const submitUpdateCompanyInfo = (evt) => {
//         evt.preventDefault();
//         console.log('addCompany');
//         axios.put(`http://localhost:8082/company/update`, updtCompanyObj)
//             .then((response) => {
//                 setUpdateCompanyInfoObj(response.data);
//                 alert('company details updated successfully.');
//                 setNewCompanyObj({ companyName:''})
            
//             })
//             .catch(() => {
//                 alert("Company could not be found.");
//             });
//     }

//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3 mb-3" >Update Company</h1>
//             <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
//             <p>Update New Company</p>
//             {/* <form onSubmit={submitAddEmp}> */}
//             <div id="addNewCompanyDiv">
//             <input
//                     type="text"
//                     id="companyId"
//                     name="companyId"
//                     value={updtCompanyObj.companyId}
//                     onChange={handleUpdateCompanyInfo}
//                     placeholder="Enter company Id" />
//                     <br/><br/>
//                 <input
//                     type="text"
//                     id="companyName"
//                     name="companyName"
//                     value={updtCompanyObj.companyName}
//                     onChange={handleUpdateCompanyInfo}
//                     placeholder="Enter company Name" />
//                     <br/><br/>
            
//                 {/* <input
//                     type="submit"
//                     // type="button"
//                     value="update Company"
//                     onClick={submitUpdateCompany}
//                 /> */}
//                 <form className="form form-group form-primary">
//                             <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitUpdateCompanyInfo} value="Update Company" />
//                         </form>
//             </div>
//         <p>Update Company: <br/></p>
//                 <p>CompanyId: {updateCompanyInfoObj.companyId} </p> 
//                 <p>Company Name: {displayCompanyInfoObj.companyName}<br/></p>
               
//         </div>
 
//         </div>
//     );
// }

 
// export default updateCompanyInfo;
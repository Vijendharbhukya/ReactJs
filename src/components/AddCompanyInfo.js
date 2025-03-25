// import { useDispatch, useSelector  } from "react-redux";
// import { useState } from "react";
// import { getAllCompanyService,addCompanyInfoService,getCompanyByIdService,insertCompanyService} from "../services/CompanyService";
// import axios from "axios";
// import Company from "../models/Company";


// import { getcompanyById,getAllCompany, deletecompanyById, addcompanyInfo, updatecompany } from "../../redux/CompanySlice";

// const addCompanyInfo = () => {

    
//     const dispatch = useDispatch();
   

//     const [newCompanyObj, setNewCompanyObj] = useState(new Company());
//     // const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
//     const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
//     // const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());
//     // const [deleteCompany, setDeleteCompany] = useState('');
//     // const companyDelete = useSelector((state) => state.company.companyDelete);
    
//     const handleAddCompanyInfo = (e) => {
//         console.log(e.target.value);
//         setNewCompanyObj({
//             ...newCompanyObj,
//             [e.target.name]: e.target.value,
//         });
//     }

//     const submitAddCompanyInfo = (evt) => {
//         evt.preventDefault();
//         console.log('addCompanyInfo');
//         axios.post(`http://localhost:8082/company/add`, newCompanyObj)
//             .then((response) => {
//                 setDisplayCompanyObj(response.data);
//                 alert('Company added successfully.');
//                 setNewCompanyObj({ CompanyName:'', CompanyId:''})
            
//             })
//             .catch(() => {
//                 alert("Company could not be added.");
//             });
//     }

//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3 mb-3" >Add Company</h1>
//             <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
//                 <p>Add New Company</p>
                 
//                 <div id="addNewCompanyDiv">
//                     <input
//                         type="text"
//                         id="companyName"
//                         name="companyName"
//                         value={newCompanyObj.companyName}
//                         onChange={handleAddCompanyInfo}
//                         placeholder="Enter Company Name" />
//                          <br/><br/>
//                     {/* <input
//                         type="text"
//                         id="companyId"
//                         name="companyId"
//                         value={newCompanyObj.companyId}
//                         onChange={handleAddCompany}
//                         placeholder="Enter companyId" />
//                         <br/><br/>  */}
                   
//                      {/* <input
//                         // type="submit"
//                         // // type="button"
//                         // value="Add Company"
//                         // onClick={submitAddCompany} 
                        
//                     /> */}
//                     <form className="form form-group form-primary">
//                             <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitAddCompanyInfo} value="Add Company" />
//                         </form>
//                 </div>

//                 <p>Company Name: {displayCompanyObj.companyName}<br/></p>
                
//             </div>
//             </div>
//     );
// }

 
// export default addCompanyInfo;
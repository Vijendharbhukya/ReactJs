
import {getAllCompanyInfoService} from "./services/CompanyService";
import { useDispatch, useSelector } from "react-redux";

import { getAllCompanyInfo } from "../redux/CompanySlice";
import Company from "../components/models/Company";


const GetAllCompany = () => {

    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.company.companyList);
   
    const submitGetAllCompany = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyInfoService()
            .then((response) => {
                dispatch(getAllCompanyInfo(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div className="container">
            <h1 className="display-5 text-primary mt-3 mb-3" >Find All Company Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all company</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Company" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>companyId</th>
                                <th>companyName</th>
                                <th>companyManager</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td><td>{company.companyManager}</td> 
                                     <td>{company.companyName}</td>
                                      
                                      </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
            
          
    );
}
export default GetAllCompany;



// import { useDispatch, useSelector  } from "react-redux";
// import { useState } from "react";
// import { getAllCompanyInfoService,getCompanyByIdService,insertCompanyService} from "../services/CompanyService";
// import axios from "axios";
// import Company from "../components/models/Company";


// import { getcompanyById,getAllCompanyInfo, deletecompanyById, addcompany, updatecompany } from "../../redux/CompanySlice";

// const GetAllCompanyInfo = () => {

//     const [companyId, setCompanyId] = useState('');
//     const dispatch = useDispatch();
//     const companyDataFromStore = useSelector((state) => state.company.companyState);
//     const companyList = useSelector((state) => state.company.companyList);

//     // const [newCompanyObj, setNewCompanyObj] = useState(new Company());
//     // const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
//     // const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
//     // const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());
//     // const [deleteCompany, setDeleteCompany] = useState('');

//     const submitGetAllCompanyInfo= (evt) => {
//         evt.preventDefault();
//         console.log('submitGetAllCompanyInfo');
//         getAllCompanyInfoService()
//             .then((response) => {
//                 dispatch(getAllCompanyInfo(response.data));
//             })
//             .catch(() => {
//                 alert(`Something is wrong!`);
//             });
//     }

//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3 mb-3" >All Company Details</h1>
//             <div>
//                 <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
//                     <p>List of all Company</p>
//                     <div>
//                         <form className="form form-group form-primary">
//                             <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompanyInfo} value="Find All Companies" />
//                         </form>
//                     </div >
//                     <table className="table table-light table-striped ">
//                         <thead>
//                             <tr>
//                                 <th>CompanyId</th>
//                                 <th>companyName</th>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {companyList.map((company, k) => {
//                                 return (
//                                     <tr k={k}> <td>{company.companyId}</td> <td>{company.companyName}</td></tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             </div>
//     );
// }

 
// export default GetAllCompanyInfo;
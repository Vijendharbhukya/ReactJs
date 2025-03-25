import { getAllCompanyInfoService, addCompanyInfoService, updateCompanyInfoService, deleteCompanybyidService } from "./services/CompanyService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addcompanyInfo,updateCompanyInfo,deleteCompanyById ,getAllCompanyInfo} from '../redux/CompanySlice';
import Company from "./models/Company";
import axios from "axios";
import { Store } from "redux";
import { Provider } from "react";
import GetAllCompany from "./GetAllCompany";

const CompanyData = () => {
   
const [companyId, setCompanyId] = useState('');
const[comId,setComId] = useState('');
const [newCompanyObj, setNewCompanyObj] = useState(new Company());

    const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());

    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());

    const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());

    const [deleteCompany, setDeleteCompany] = useState('');

       const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);
    

    const handleCompany = (e) => {
        console.log('handleCompany');
        setCompanyId(e.target.value);
    }
     

    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleUpdateCompany = (e) => {
        console.log(e.target.value);
        setUpdtCompanyObj({
            ...updtCompanyObj,
            [e.target.name]: e.target.value,
        });
    }



    const handleDeleteCompany = (ev) => {
        console.log('handleDeleteCompany');
        setDeleteCompany(ev.target.value);
    }

    


    const submitDeleteCompany = (evt) => {
        evt.preventDefault();
        console.log('deleteCompanyDetails');
        axios.delete(`http://localhost:8082/deleteCompanybyid`) //delete/${companyid}
            .then((response) => {
                alert(`Company details deleted successfully.`);
                //  dispatch(deletecompanyById(response.data));    
            })
            .catch(() => {
               alert(`Company not found.`);
            });

    }
    
    const submitAddCompany = (evt) => {

        evt.preventDefault();
        console.log('addCompany');
        axios.post(`http://localhost:8082/addCompanyInfo`, newCompanyObj)

            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ CompanyName:'', CompanyId:''})
            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }
    const submitUpdateCompany = (evt) => {

        evt.preventDefault();
        console.log('updateCompany');
        axios.put(`http://localhost:8082/updateCompanyInfo`, updtCompanyObj)

            .then((response) => {
                setUpdateCompanyObj(response.data);
                alert('company details updated successfully.');
                setNewCompanyObj({ companyName:''})
            })
            .catch(() => {

                alert("Company could not be found.");
            });
    }


    

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Company Component</h1>

            {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Company by id</p>
                <form className="form form-group form-primary" onClick={getAllCompanyInfo}>
                    <input className="form-control mt-3" type="number" id="companyId" name="companyId" value={companyId} onChange={handleCompany} placeholder="Enter company id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search company" />
                </form>
                <p>Company details: {companyDataFromStore.companyId} {companyDataFromStore.companyName}  </p>
            </div> */}


            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <GetAllCompany/>
                    </div>
            {/* <div> */}
                {/* <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Company</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Companies" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>CompanyId</th>
                                <th>companyName</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td> <td>{company.companyName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div> */}

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
                <p>Add New Company</p>
                 
                <div id="addNewCompanyDiv">
                    <input 
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={newCompanyObj.companyName}
                        onChange={handleAddCompany} 
                        placeholder="Enter Company Name" />
                         <br/><br/>
                    <input
                        type="text"
                        id="companyManager"
                        name="companyManager"
                        value={newCompanyObj.companyManager}
                        onChange={handleAddCompany}
                        placeholder="Enter companyManager" />
                        <br/><br/> 
                    
                    <input
                        type="submit"
                        value="Add Company"
                        onClick={submitAddCompany}
                    />
                </div>
                <p>New Company Data:{displayCompanyObj.companyName} </p>
            </div>

             
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Company</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCompanyDiv">
            <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    name="companyId"
                    value={updtCompanyObj.companyId}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Id" />
                    <br/><br/>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    name="companyName"
                    value={updtCompanyObj.companyName}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Name" />
                    <br/><br/>
                    <input
                    type="text"
                    id="companyManager"
                    name="companyManager"
                    name="companyManager"
                    value={updtCompanyObj.companyManager}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Manager" />
                    <br/><br/>  
                <input
                    type="submit"
                    // type="button"
                    value="update Company"
                    onClick={submitUpdateCompany}
                />
            </div>
        <p>Updated Company Data: {updateCompanyObj.CompanyId} {updateCompanyObj.companyName} {updateCompanyObj.companyManager}</p>
        </div>
 
       
<div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete company by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCompany}>
                    <input className="form-control mt-3" type="number" id="deleteCompany" name="deleteCompany" value={deleteCompany} onChange={handleDeleteCompany} placeholder="Enter Company Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Company" />
                </form>
                 
            </div>

        </div>
    );
}


 
export default CompanyData;



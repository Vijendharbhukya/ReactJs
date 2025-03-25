import axios from 'axios';
// Create services for other components in this way. 

const addCompanyInfoService = (company) => {
    console.log(`getCompanyByIdService`);
    return axios.post(`/company/addcompanyInfo`, company);
}

const updateCompanyInfoService = (company) => {
    console.log(`updateCompanyInfoService`);
    return axios.put(`/company/updatecompanyInfo`, company);
}

const deleteCompanybyidService = (comId) => {
    console.log(`deleteCompanybyidService`);
    return axios.delete(`/deleteCompanybyid/${comId}`);
}

const getAllCompanyInfoService  = () => {
    console.log(`getAllCompanyInfoService`);
    return axios.get(`/getAllCompanyInfo`);
}


export{addCompanyInfoService,updateCompanyInfoService,deleteCompanybyidService,getAllCompanyInfoService};
